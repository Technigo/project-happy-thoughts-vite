import React from "react";

export const ThoughtList = ({ thoughts, loading, LikeThoughtComponent, handleLikeThought }) => {
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
              <p>{thought.message}</p>
              <LikeThoughtComponent thoughtId={thought._id} handleLikeThought={handleLikeThought} />
              <span> x{thought.hearts}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
