import { useState, useEffect } from "react";
import { Thoughts } from "./Thoughts";
import { Input } from "./Input";
import { Submit } from "./Submit";

export const Form = () => {
  const [thoughts, setThoughts] = useState([]);
  const [input, setInput] = useState();
  // const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  const url = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

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
        console.error("fetch error:", error);
        setInput("");
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchThoughts();
  }, []);

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

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input input={input} onChange={handleInputChange} />
        <Submit />
        {error && <div>{error}</div>}
      </form>
      {isLoading && <div>Loading...</div>}
      {thoughts.map((item, index) => (
        <Thoughts key={index} message={item.message} />
      ))}
    </div>
  );
};
