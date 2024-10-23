import React from "react";
import Likes from "./Likes";

const Thoughts = ({ thoughts, setThoughts }) => {
    return (
        <div>
            {thoughts.map((thought) => (
                <Likes key={thought._id} thought={thought} setThoughts={setThoughts} />
            ))}
        </div>
    );
};

export default Thoughts;
