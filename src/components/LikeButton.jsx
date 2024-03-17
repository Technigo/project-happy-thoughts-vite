import { useEffect, useState } from "react";

export const LikeButton = ({thoughtId, likes, setLikes}) => {

  const postLike = async () => {
    try {
      const response = await fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thoughtId}/like`, { 
        method: "POST",
     });
      if (!response.ok) {
        throw new Error("Error fetching data");
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      throw new Error("Error", error);
    }
  };

  const handleLike = () => {
    postLike();
    setLikes(likes + 1)
  }

  return (
    <button className="like-btn" onClick={handleLike}>❤️</button>
  )
}
