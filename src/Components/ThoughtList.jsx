/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { ThoughtHeart } from "./ThoughtHearts";
import "../Styles/ThoughtList.css"


export const ThoughtList = ({ thoughts }) => {
  const [updatedLikes, setUpdatedLikes] = useState(thoughts) // Track both messages and likes

  // Sync updatedLikes with the latest message when they change
  useEffect(() => {
    setUpdatedLikes(thoughts);
  }, [thoughts]); // Dependency array, runs effect when 'thoughts' changes

  // Helper function to calculate "time ago" for each thought
  const timeAgo = (createdAt) => {
    const now = new Date(); // Get the current date and time
    const timeDifference = Math.floor((now - new Date(createdAt)) / 1000); // Calculate difference in seconds

    // Return formatted time based on how long ago the thought was created
    if (timeDifference < 60) {
      return `${timeDifference} seconds ago`; // Less than 1 minute
    } else if (timeDifference < 3600) { // Less than an hour
      const minutes = Math.floor(timeDifference / 60);
      return `${minutes} minutes ago`;
    } else if (timeDifference < 86400) { // Less than a day
      const hours = Math.floor(timeDifference / 3600);
      return `${hours} hours ago`;
    } else {
      const days = Math.floor(timeDifference / 86400);
      return `${days} days ago`; // More than 1 day
    }
  };

  // Function to increase the like count for a thought
  const increasedLike = (thoughtId) => {
    // Update state with the new like count
    setUpdatedLikes((prevLikes) =>
      prevLikes.map((thought) =>
        thought._id === thoughtId
          ? { ...thought, hearts: thought.hearts + 1 } // Increment the hearts count
          : thought // Return the unmodified thought
      )
    );

    // POST request to like the thought
    fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thoughtId}/like`, {
      method: 'POST', // Use POST method
      headers: {
        'Content-Type': 'application/json'
      }
    });
  };

  // Render the component
  return (
    <div className="thought-list"> {/* Main container for thought list */}
      {updatedLikes.map((thought) => ( // Map through each thought in updatedLikes
        <div key={thought._id}> {/* Unique key for each child in a list */}
          <div className="thought-message-box"> {/* Container for the thought message */}
            <p>{thought.message}</p> {/* Display the thought message */}
            <div className="heart-container"> {/* Container for hearts */}
              <ThoughtHeart
                thoughtId={thought._id} // Pass the unique thought ID
                onLike={increasedLike} // Pass the like handler to the ThoughtHeart component
              />
              <p className="heart-count">x {thought.hearts}</p> {/* Display hearts count */}
            </div>
            {thought.createdAt && ( // Check if createdAt is present
              <p className="time-ago">{timeAgo(thought.createdAt)}</p> // Display "time ago"
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
