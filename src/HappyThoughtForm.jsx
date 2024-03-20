import { useState } from "react";

const HappyThoughtForm = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello");
    postNewThought();
  };

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  //const handleNewThougthChange = (event) => {
  //setNewThought(event.target.value);
  //};

  const postNewThought = () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: message }),
    };
    fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts", options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <form
      method="post"
      value={message}
      onChange={handleChange}
      onSubmit={handleSubmit}
    >
      <header>What is making you happy rigth now? </header>
      <label>
        <textarea
          placeholder="Only happy thoughts here..."
          type="text"
          name="postContent"
          rows={4}
          cols={40}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </label>

      <button className="submit-button" type="submit">
        💗 Send Happy Thought 💗
      </button>
    </form>
  );
};

export default HappyThoughtForm;
