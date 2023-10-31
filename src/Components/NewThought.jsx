import React, { useState } from "react";

export const NewThought = ({ onNewThought }) => {
  const [newThought, setNewThought] = useState("");
  const [error, setError] = useState(null);

  const postNewThought = async () => {
    try {
      const response = await fetch(
        "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: newThought }),
        }
      );

      if (response.ok) {
        const newThoughtData = await response.json();
        onNewThought(newThoughtData); 
        setNewThought("");
        setError(null);
      } else {
        const errorData = await response.json();
        setError(errorData.message);
      }
    } catch (error) {
      console.error("Error posting thought:", error);
      setError("An error occurred while posting your thought.");
    }
  };

  return (
    <div className="new-thought-container">
      <input
        type="text"
        value={newThought}
        onChange={(e) => setNewThought(e.target.value)}
        placeholder="Share your happy thought..."
        className="new-thought-input"
      />
      <button className="new-thought-button" onClick={postNewThought}>
        ❤️ Send Happy Thought ❤️
      </button>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};