// PostLikes.jsx

import { useState } from "react";

export const PostLikes = ({ recentThoughtLikes, thoughtId }) => {
  // Hooks
  const [newLike, setNewLike] = useState(recentThoughtLikes);
  // API for POST number of hearts, thoughtID keeps track of witch thought that should have a like
  const URL_LIKES = `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thoughtId}/like`;
  // Update button class to change color depending on likes
  const buttonClass = newLike > 0 ? "post-btn liked" : "post-btn";

  // Function that POST +1 likes to the API
  const handleLikeClick = async () => {
    try {
      const response = await fetch(URL_LIKES, {
        method: "POST",
      });
      if (response.ok) {
        setNewLike(newLike + 1); // Uppdate in web browser/lokally number of likes (before API)
      } else {
        console.error("Failed to like the thought");
      }
    } catch (error) {
      console.error("Error during like:", error);
    }
  };

  return (
    <div className="post-btn-container">
      <button
        className={buttonClass} // Updates color depending on likes or no likes
        // If button is clicked, run function hanndleLikeClick
        onClick={handleLikeClick}>
        ❤️
      </button>

      {/* Shows number of likes */}
      <p>x {newLike}</p>
    </div>
  );
};