/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { ThoughtHeart } from "./ThoughtHeart";
import "../styles/ThoughtList.css";

export const ThoughtList = ({ thoughts }) => {
  const [updatedLikes, setUpdatedLikes] = useState(thoughts); // Track both messages and likes

  // Sync updatedLikes with the latest messages when they change
  useEffect(() => {
    const likedThoughts = JSON.parse(localStorage.getItem("likedThoughts")) || [];
    const thoughtsWithLikes = thoughts.map((thought) => {
      // If thought is already liked, keep the original heart count
      const isLiked = likedThoughts.includes(thought._id);
      return {
        ...thought,
        hearts: isLiked ? thought.hearts : thought.hearts // Keep the original heart count
      };
    });
    setUpdatedLikes(thoughtsWithLikes);
  }, [thoughts]); // Runs effect when 'thoughts' changes

  // Function to calculate "time ago" for each thought
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

  // Function to increase the like count for a thought and update localStorage
  const increasedLike = (thoughtId) => {
    setUpdatedLikes((prevLikes) =>
      prevLikes.map((thought) =>
        thought._id === thoughtId
          ? { ...thought, hearts: thought.hearts + 1 } // Increment the hearts count
          : thought // Return the unmodified thought
      )
    );

    // Update the list of liked thoughts in localStorage
    const likedThoughts = JSON.parse(localStorage.getItem("likedThoughts")) || [];
    if (!likedThoughts.includes(thoughtId)) {
      likedThoughts.push(thoughtId); // Add the current thoughtId to likedThoughts
      localStorage.setItem("likedThoughts", JSON.stringify(likedThoughts)); // Save updated list in localStorage
    }
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
