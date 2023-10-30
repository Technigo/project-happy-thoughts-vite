import React from "react";

export const ThoughtList = ({ thoughts, loading }) => {
  const renderThoughts = () => {
    if (loading) {
      return <p>Loading...</p>;
    } else if (thoughts.length === 0) {
      return <p>No thoughts found.</p>;
    } else {
      return (
        <ul>
          {thoughts.map((thought) => (
            <li key={thought._id}>{thought.message}</li>
          ))}
        </ul>
      );
    }
  };

  return (
    <div className="thought-list">
      <h1>Happy Thoughts</h1>
      {renderThoughts()}
    </div>
  );
};
