import { useState } from "react";

// Here is where we create the form/input field
export const Form = () => {
  const [message, setMessage] = useState("");

  const onChange = (event) => {
    setMessage(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    // URL from https://github.com/Technigo/project-happy-thoughts-vite/blob/main/instructions.md#create-a-thought
    const url = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <label className="label" htmlFor="message">
        What's making you happy right now?
      </label>
      <textarea
        className="textInput"
        id="message"
        rows="3"
        onChange={onChange}
      ></textarea>
      <button className="submitButton" type="submit">
        ❤️ Send Happy Thought ❤️
      </button>
    </form>
  );
};
