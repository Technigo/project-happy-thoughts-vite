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
  const [charCount, setCharCount] = useState(0);

  const url = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

  const handleInputChange = (e) => {
    setInput(e.target.value);
    setCharCount(e.target.value.length);
  };

  //function to fetch thoughs from API
  const fetchThoughts = () => {
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
        setIsLoading(false);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setInput("");
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchThoughts();
    console.log("thoughts from API moutned");
  }, []);

  //fx to handle text input and POST to API

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input || input.length < 5 || input.length > 140) {
      if (!input) {
        setError("please enter a thought");
      } else if (input.length < 5) {
        setError("Your thought is too short");
        setInput("");
      } else {
        setError("Your thought is too long");
        setInput("");
      }
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
      .then((newThoughts) => {
        setThoughts((prev) => [newThoughts, ...prev]);
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
      .then((likeData) => {
        setThoughts((prev) =>
          prev.map((thought) =>
            thought._id === thoughtId ? likeData : thought
          )
        );
      });
  };

  return (
    <div className="container-wrapper">
      <form className="form-container" onSubmit={handleSubmit}>
        <Input
          input={input}
          onChange={handleInputChange}
          charCount={charCount}
        />
        <Submit />
        {error && <div>{error}</div>}
      </form>

      {isLoading && <div>Loading...</div>}

      {thoughts.map((item) => (
        <div key={item._id}>
          <Thoughts message={item.message} thoughtId={item._id} />
          <Heart
            emoji="❤️"
            label="heart"
            onClick={(e) => handleLike(e, item._id)}
            likes={item.hearts}
          />
        </div>
      ))}
    </div>
  );
};
