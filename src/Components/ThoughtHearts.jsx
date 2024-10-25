/* eslint-disable react/prop-types */

import "../Styles/ThoughtHeart.css"

export const ThoughtHeart = ({ thoughtId, onLike }) => {
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
      } else {
        console.error("Failed to like the thought");
      }
    } catch (error) {
      console.error("Error liking thought: ", error);
    }
  };

  return (
    <span className="heart-count" onClick={handleLike} style={{ cursor: 'pointer' }}>
      ❤️
    </span>
  );
};