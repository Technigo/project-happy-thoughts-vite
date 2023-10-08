import React, { useState } from 'react';

const Thought = ({ thought }) => {
    // Add a state variable to keep track of the number of likes
    const [hearts, setHearts] = useState(thought.hearts);

    // Function to like a thought 
    const handleLikeClick = () => {
        // Send a POST request to the API to like the thoughts
        // Updates amount of likes in state
        setHearts(hearts + 1);
    };

    return (
        <div className="thought">
            <p>{thought.message}</p>
            <div className="actions">
                <button onClick={handleLikeClick}>❤️</button>
                <span> x {hearts}</span>
            </div>
        </div>
    );
};

export default Thought;
