// eslint-disable-next-line no-unused-vars
import React,  { useState, useEffect } from 'react';

// Pushing to an API is connecting the dots.

const HappyThoughts = () => {
    const [message, setMessage] = useState([]);
  
    useEffect(() => {
      fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
        .then(res => res.json())
        .then(json => {
          setMessage(json);
        });
    }, []); // Empty dependency array to trigger the effect only once
  
    return (
      <div>
        {message.map((thought, index) => (
          <div key={index}>
            {thought.message} - {thought.hearts} hearts
            </div>
        ))}
      </div>
    );
  };

  export default HappyThoughts;