import React from "react";
import { useState } from "react";

const Thought = ({ createdThought }) => {
  const [thought, setThought] = useState("");

  const createThough = async () => {
    try {
      await fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: thought }),
      });

      setThought("");
      createdThought();
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  return (
    <div className="thoughtContainer">
      <p>What is making you happy right now?</p>
      <input
        type="text"
        value={thought}
        onChange={(e) => setThought(e.target.value)}
        placeholder="Write your happy thoughts here..."
      />
      <button className="submit" onClick={createThough}>
        ❤️ Send Happy Thought ❤️
      </button>
    </div>
  );
};

export default Thought;
