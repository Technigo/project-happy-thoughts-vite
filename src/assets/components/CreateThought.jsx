import { useState } from "react";

const APIURL = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

export const CreateThought = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(APIURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) {
        const errorMessage = await response.json();
        throw new Error(errorMessage.error);
      }

      const newThought = await response.json();
      console.log("New thought:", newThought);
      // Optionally, you can display a success message or redirect the user
      setMessage("");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleChange = (event) => {
    setMessage(event.target.value);
    setError(""); // Clear error message when user starts typing again
  };

  return (
    <div>
      <h2>Create a New Thought</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <textarea
          value={message}
          onChange={handleChange}
          placeholder="Enter your happy thought"
          required
          minLength={5}
          maxLength={140}
        />
        <br />
        <button type="submit">Post Thought</button>
      </form>
    </div>
  );
};
