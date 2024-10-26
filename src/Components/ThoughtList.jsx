/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { ThoughtHeart } from "./ThoughtHearts";
import "../Styles/ThoughtList.css"
import "../Styles/ThoughtHeart.css"

export const ThoughtList = ({ thoughts }) => {
  const [updatedLikes, setUpdatedLikes] = useState(thoughts) // Track both messages and likes

  // Sync updatedLikes with the latest message when they change
  useEffect(() => {
    setUpdatedLikes(thoughts);
  }, [thoughts]);

  // Helper function to calculate "time ago" for each thought
  const timeAgo = (createdAt) => {
    const now = new Date();
    const timeDifference = Math.floor((now - new Date(createdAt)) / 1000); // Difference in seconds

    if (timeDifference < 60) {
      return `${timeDifference} seconds ago`;
    } else if (timeDifference < 3600) { // Less than an hour
      const minutes = Math.floor(timeDifference / 60);
      return `${minutes} minutes ago`;
    } else if (timeDifference < 86400) { // Less than a day
      const hours = Math.floor(timeDifference / 3600);
      return `${hours} hours ago`;
    } else {
      const days = Math.floor(timeDifference / 86400);
      return `${days} days ago`;
    }
  };

  const increasedLike = (thoughtId) => {
    setUpdatedLikes((prevLikes) =>
      prevLikes.map((thought) =>
        thought._id === thoughtId
          ? { ...thought, hearts: thought.hearts + 1 } // Increment the hearts count
          : thought
      )
    );

    // POST request to like the thought
    fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thoughtId}/like`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });
  };

  return (
    <div className="thought-list">
      {updatedLikes.map((thought) => (
        <div key={thought._id}>
          <div className="thought-message-box">
            <p>{thought.message}</p>
            <div className="heart-container">
              <ThoughtHeart
                thoughtId={thought._id}
                onLike={increasedLike} // Pass the like handler to the ThoughtHeart component
              />
              <p className="heart-count">x {thought.hearts}</p>
            </div>
            {thought.createdAt && (
              <p className="time-ago">{timeAgo(thought.createdAt)}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
