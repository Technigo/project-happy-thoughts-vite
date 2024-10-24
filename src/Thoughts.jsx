import React from "react";

// Helper function to calculate the relative time
const timeAgo = (timestamp) => {
    const now = new Date();
    const secondsDifference = Math.floor((now - new Date(timestamp)) / 1000);

    // Define the units in seconds
    const units = {
        year: 60 * 60 * 24 * 365,
        month: 60 * 60 * 24 * 30,
        week: 60 * 60 * 24 * 7,
        day: 60 * 60 * 24,
        hour: 60 * 60,
        minute: 60,
        second: 1,
    };

    // Loop through the units to find the appropriate one
    for (let [unit, secondsInUnit] of Object.entries(units)) {
        const amount = Math.floor(secondsDifference / secondsInUnit);
        if (amount >= 1) {
            return `${amount} ${unit}${amount > 1 ? "s" : ""} ago`;
        }
    }

    return "just now";
};

const Thoughts = ({ thoughts, setThoughts }) => {

    // Function to handle "liking" a thought
    const handleLike = (id) => {
        fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${id}/like`, {
            method: "POST",
        })
            .then((res) => res.json())
            .then((updatedThought) => {
                // Check if the updated thought's hearts are valid
                if (updatedThought.hearts !== undefined && updatedThought.hearts !== null) {
                    // Update the thoughts state with the new likes count
                    setThoughts((prevThoughts) =>
                        prevThoughts.map((thought) =>
                            thought._id === updatedThought._id
                                ? { ...thought, hearts: updatedThought.hearts }
                                : thought
                        )
                    );
                }
            })
            .catch((error) => {
                console.error("Error updating likes:", error);
            });
    };

    return (
        <div>
            {/* Loop through each thought and display it */}
            {thoughts.map((thought) => (
                <div key={thought._id} className="message">
                    <p>{thought.message}</p>
                    <div className="heart-container">
                        {/* Button to "like" the thought */}
                        <button
                            className="heart-button"
                            onClick={() => handleLike(thought._id)}
                        >
                            ❤️ {thought.hearts ?? 0} {/* Display 0 if hearts is undefined */}
                        </button>
                        {/* Display how long ago the thought was posted */}
                        <p className="time">{timeAgo(thought.createdAt)}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Thoughts;
