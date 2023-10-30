import React from "react";

export const ThoughtList = ({ thoughts, loading, handleLikeThought }) => {
  return (
    <div className="thought-list">
      <h1>Happy Thoughts</h1>
      {loading ? (
        <p>Loading...</p>
      ) : thoughts.length === 0 ? (
        <p>No thoughts found.</p>
      ) : (
        <ul>
          {thoughts.map((thought) => (
            <li key={thought._id}>
              {thought.message}
              <button onClick={() => handleLikeThought(thought._id)}>Like</button>
              <span>{thought.hearts} Likes</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
