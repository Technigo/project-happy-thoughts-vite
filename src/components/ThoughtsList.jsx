
import React, { useEffect, useState } from 'react';
import Thought from './Thought';

const ThoughtsList = (props) => {
    const [thoughts, setThoughts] = useState([]);

    // Synchronize thoughts with the prop passed from App
    useEffect(() => {
        setThoughts(props.thoughts);
    }, [props.thoughts]);

    return (
        <div>
            {thoughts.map((thought) => (
                <Thought key={thought._id} thought={thought} />
            ))}
        </div>
    );
};

export default ThoughtsList;
