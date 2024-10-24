/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { ThoughtHeart } from "./ThoughtHearts";
import "../Styles/ThoughtList.css"

export const ThoughtList = ({ thoughts }) => {
  const [updatedLikes, setUpdatedLikes] = useState(thoughts) // Track both messages and likes

  // Sync updatedLikes with the latest message when they change
  useEffect(() => {
    setUpdatedLikes(thoughts);
  }, [thoughts]);

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
          </div>
        </div>
      ))}
    </div>
  );
};

