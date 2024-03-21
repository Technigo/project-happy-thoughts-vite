import { useEffect, useState } from "react";

export const LikeButton = ({ thoughtId, likes, setLikes }) => {
const [likeClass, setLikeClass] = useState("like-btn");

  const postLike = async () => {
    try {
      const response = await fetch(
        `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thoughtId}/like`,
        {
          method: "POST",
        }
      );
      if (!response.ok) {
        throw new Error("Error fetching data");
      }
    } catch (error) {
      throw new Error("Error", error);
    }
  };

  const handleLike = () => {
    postLike();
    setLikes(likes + 1);
  };

  useEffect (() => {
    likes > 0 && setLikeClass("like-btn liked")
  }, [likes])
  

  return (
    <button
      className={likeClass}
      onClick={handleLike}>
      ❤️
    </button>
  );
};
