import { useEffect, useRef, useState } from "react";
import { Counter } from "./Counter";

export const Form = ({ newThought, setNewThought }) => {
  const formInput = useRef();
  const [count, setCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [submitOk, setSubmitOk] = useState(false);

  const postThought = async event => {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://project-happy-thoughts-api-4mf8.onrender.com/thoughts",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: newThought }),
        }
      );
      if (!response.ok) {
        throw new Error("Error fetching data");
      }
      setNewThought("");
    } catch (error) {
      setErrorMessage("Your thought couldn't be posted...");
      throw new Error("Error", error);
    }
  };

  useEffect(() => {
    setTimeout(() => setErrorMessage(""), 5000);
  }, [errorMessage]);

  useEffect(() => {
    count >= 5 && count <= 140 && setSubmitOk(true);
  }, [count]);

  const handleChange = event => {
    setNewThought(event.target.value);
    setCount(event.target.value.length);
  };

  return (
    <form
      className="thought-form"
      onSubmit={postThought}>
      <label>
        What&apos;s making you happy right now?
        <textarea
          name="thought"
          id="thought-input"
          cols="30"
          rows="10"
          minLength={5}
          maxLength={140}
          ref={formInput}
          value={newThought}
          onChange={handleChange}></textarea>
      </label>
      {errorMessage && <p className="error error-message">{errorMessage}</p>}
      {count > 0 && <Counter characters={count} />}
      <button
        className="submit-btn"
        disabled={!submitOk}>
        ❤️ Send Happy Thought ❤️
      </button>
    </form>
  );
};
