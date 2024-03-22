import "./Form.css";
import { useState, useEffect } from "react";
import { Thoughts } from "./Thoughts";
import { Input } from "./Input";
import { Submit } from "./Submit";
import { Heart } from "./Heart";

export const Form = () => {
  const [thoughts, setThoughts] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [inputLength, setInputLength] = useState(0);

  const url = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

  const handleInputChange = (e) => {
    setInput(e.target.value);
    setInputLength(e.target.value.length);
  };

  //function to fetch thoughs from API
  const fetchThoughts = () => {
    setIsLoading(true);
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("error fetching thoughts");
        }
        return res.json();
      })
      .then((data) => {
        setThoughts(data);
        setInput("");
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setInput("");
      });
    setIsLoading(false);
  };

  useEffect(() => {
    fetchThoughts();
  }, []);

  //handle posted thought time
  thoughts.map((item) => {
    const time = new Date(item.createdAt);
    console.log(time);

    const formattedTime = time.timetoLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false, // Use 24-hour format
    });
    console.log(formattedTime);
  });

  //fx to handle text input and POST to API
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input || input.length < 5 || input.length > 140) {
      if (!input) {
        setError("Enter a thought ❤️");
      } else if (input.length < 5) {
        setError("Thought too short ❤️");
      } else {
        setError("Thought too long ❤️");
      }
      setInputLength(0);
      setInput("");
      return;
    }

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        message: input,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .catch((error) => {
        setError(error.message);
      })
      .then((newThoughts) => {
        setThoughts((prev) => [newThoughts, ...prev]);
        setIsLoading(false);
        setInput("");
        setError(null);
        setInputLength(0);
      });
  };

  //fx to handle like button and POST to API
  const handleLike = (e, thoughtId) => {
    e.preventDefault();

    fetch(
      `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thoughtId}/like`,
      {
        method: "POST",
        body: JSON.stringify({}),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((res) => res.json())
      .then((likesData) => {
        setThoughts((prev) =>
          prev.map((thought) =>
            thought._id === thoughtId ? likesData : thought
          )
        );
      });
  };

  return (
    <div className="container-wrapper">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <form className="form-container" onSubmit={handleSubmit}>
            <Input
              input={input}
              onChange={handleInputChange}
              inputLength={inputLength}
            />

            {error ? (
              <button className={`submit-button ${error}`}> {error} </button>
            ) : (
              <Submit />
            )}
          </form>

          {thoughts.map((item) => (
            <div className="thoughts-container" key={item._id}>
              <Thoughts message={item.message} thoughtId={item._id} />
              <Heart
                emoji="❤️"
                label="heart"
                onClick={(e) => handleLike(e, item._id)}
                likes={item.hearts}
                time={item.createdAt}
              />
            </div>
          ))}
        </>
      )}
    </div>
  );
};
