import { useState } from "react";

export const NewThoughts = () => {
  const [newThoughts, setNewThoughts] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // If the happy thoughts box is containing an invalid number of letters this message will show
    if (newThoughts.length < 5 || newThoughts.length > 140) {
      alert("The message can only contain 5-140 letters. Please try again! 💕");
      return;
    }

    // Clear the input field if the message is valid
    setNewThoughts("");

    // Perform the POST request to your API here
    fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: newThoughts }),
    })
      .then((res) => res.json())
      .then((newThought) => {
        // Handle the response here if needed
        console.log("New thought posted:", newThought);
      })
      .catch((error) => {
        console.error("Error posting thought:", error);
      });
  };

  return (
    <div className="newThoughtsContainer">
      <h2>What makes you happy right now?</h2>
      <form onSubmit={handleFormSubmit}>
        <textarea
          type="text"
          value={newThoughts}
          onChange={(e) => setNewThoughts(e.target.value)}
          rows="3"
          minLength="5"
          maxLength="140"
          placeholder='"Most folks are about as happy as they make up their minds to be." -Abraham Lincoln'
          className="inputField"
        />
        <button type="submit" className="submitButton">
          ❤️ Send Happy Thought ❤️
        </button>
      </form>
    </div>
  );
};
