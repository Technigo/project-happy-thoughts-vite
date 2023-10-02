import React, { useState, useEffect } from 'react';

function ThoughtList() {
  const [thoughts, setThoughts] = useState([]);

  useEffect(() => {
    // Fetch recent thoughts when the component mounts
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts')
      .then((response) => response.json())
      .then((data) => {
        setThoughts(data);
      })
      .catch((error) => {
        console.error('Error fetching recent thoughts:', error);
      });
  }, []);

  return (
    <div>
      <h2>Recent Thoughts</h2>
      <ul style={{ listStyleType: 'none' }}>
        {thoughts.map((thought) => (
          <li key={thought._id} className="thought">
            <p className="thought-message">{thought.message}</p>
            <button className="thought-like-button">❤️ {thought.hearts}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ThoughtList;








