import { useState, useEffect } from "react";
import { Thoughts } from "./Thoughts";
import { Input } from "./Input";
import { Submit } from "./Submit";

export const Form = () => {
  const [thoughts, setThoughts] = useState([]);
  const [input, setInput] = useState();
  const [submitted, setSubmitted] = useState(false);
  // const [newThought, setNewThough] = useState()
  // const newThought = {}

  const url = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

  const fetchThoughts = () => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("error");
        }
        return res.json();
      })
      .then((data) => setThoughts(data));
  };

  useEffect(() => {
    fetchThoughts();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(url),
      {
        method: "POST",
        body: JSON.stringify({
          message: "",
        }),
        headers: { "Content-Type": "application/json" },
      }
        .then((res) => res.json())
        .then((data) => {
          setThoughts((data) => [newThought, ...data]);
        });

    setSubmitted(true);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input input={input} onChange={handleInputChange} />
        <Submit />
      </form>
      {thoughts.map((item, index) => (
        <Thoughts key={index} message={item.message} />
      ))}
    </div>
  );
};
