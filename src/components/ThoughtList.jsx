import React from 'react';

function ThoughtList(props) {
  const thoughts = props.thoughts; // Receive thoughts as props from App

  return (
    <div>
      <h2>Recent Thoughts</h2>
      {thoughts.map((thought) => (
        <div key={thought._id}>
          {/* Display the thought message and likes count */}
          <p>{thought.message}</p>
          <p>Likes: {thought.hearts}</p>
        </div>
      ))}
    </div>
  );
}

export default ThoughtList;

