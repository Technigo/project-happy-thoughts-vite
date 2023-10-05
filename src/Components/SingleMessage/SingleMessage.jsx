import { useState, useEffect } from "react";
import moment from "moment";

export const SingleMessage = ({ message, fetchPosts }) => {
  const [numLikes, setNumLikes] = useState(message.hearts);
  const [liked, setLiked] = useState(message.liked);
  console.log(message);

  const onLikeIncrease = async () => {
    try {
      const response = await fetch(
        `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${message._id}/like`,
        {
          method: "POST",
        }
      );
      const result = await response.json();
      setNumLikes(result.hearts);
      setLiked(true);
      fetchPosts(); // Assuming fetchPosts is a function to refresh the message list
    } catch (error) {
      console.error("Error liking message:", error);
    }
  };

  return (
    <div className="message">
      <p>{message.message}</p>
      <button
        onClick={onLikeIncrease}
        style={{ color: liked ? "blue" : "black" }}
      >
        ❤️
      </button>
      <span>{numLikes} Likes</span>
      <p>Posted {moment(message.createdAt).fromNow()}</p>
    </div>
  );
};
