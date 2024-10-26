/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import "../Styles/ThoughtHeart.css"


export const ThoughtHeart = ({ thoughtId, onLike }) => {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    // Check if this thoughtId is already liked in localStorage
    const likedThoughts = JSON.parse(localStorage.getItem('likedThoughts')) || [];
    if (likedThoughts.includes(thoughtId)) {
      setLiked(true);
    }
  }, [thoughtId]);

  const handleLike = async () => {
    const URL = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thoughtId}/like";

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        onLike(thoughtId); // Call the parent/ThoughtList to update the hearts count
        setLiked(true); // Set the liked state to true

        // Save this thoughtId in localStorage
        const likedThoughts = JSON.parse(localStorage.getItem('likedThoughts')) || [];
        if (!likedThoughts.includes(thoughtId)) {
          likedThoughts.push(thoughtId);
          localStorage.setItem('likedThoughts', JSON.stringify(likedThoughts));
        }
      } else {
        console.error("Failed to like the thought");
      }
    } catch (error) {
      console.error("Error liking thought: ", error);
    }
  };

  return (
    <span
      className={`heart-count ${liked ? 'liked' : ''}`}
      onClick={handleLike}
      style={{ cursor: 'pointer', }}>
      ❤️
    </span>
  );
};