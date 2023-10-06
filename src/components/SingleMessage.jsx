/* eslint-disable react/prop-types */
import { useState } from "react";
import moment from "moment";

export const SingleMessage = ({ message, fetchPosts }) => {
  const [numLikes, setNumLikes] = useState(message.hearts);
  const [liked, setLiked] = useState(false);

  const onLikeIncrease = async () => {
    try {
      // Making a POST request to the API to like a message
      const response = await fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${message._id}/like`, {
        method: "POST",
      });

      if (response.ok) {
        // Incrementing the local like count (numLikes)
        setNumLikes(numLikes + 1);
        // Marking the message as liked
        setLiked(true);
        // Fetching the updated posts
        fetchPosts();
      } else {
        // Handle error if the POST request is not successful
        console.error("Error liking the message");
      }
    } catch (error) {
      // Handle any other errors that occur during the fetch operation
      console.error("Error:", error);
    }
  };

  return (
    <div className="message-wrapper">
      <p>{message.message}</p>
      <div className="likes-wrapper">
        <button
          type="button"
          id="likeBtn"
          className={`like-button ${liked ? "liked" : ""}`}
          onClick={onLikeIncrease}
        >
          <span aria-label="like button">❤️</span>
        </button>
        <p>{numLikes}</p>
        <div className="info-time">{moment(message.createdAt).fromNow()}</div>
      </div>
    </div>
  );
};
