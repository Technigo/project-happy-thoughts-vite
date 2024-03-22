import { useState } from "react";

export const LikeButton = ({ thoughtId, initialLikes, onLike }) => {
  const [likes, setLikes] = useState(initialLikes);

  const handleLikeClick = async () => {
    try {
      const response = await fetch(
        `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thoughtId}/like`,
        {
          method: "POST",
        }
      );
      if (!response.ok) {
        throw new Error("Failed to like the thought");
      }

      setLikes((prevLikes) => prevLikes + 1);
      onLike();
    } catch (error) {
      console.error("Error liking thought:", error);
    }
  };

  return <button onClick={handleLikeClick}>Like ({likes})</button>;
};
