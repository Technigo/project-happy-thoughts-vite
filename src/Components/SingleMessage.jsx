import { useState } from "react";
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
      fetchPosts();
    } catch (error) {
      console.error("Error liking message:", error);
    }
  };

  return (
    <div className="message">
      <p>{message.message}</p>
      <div className="info-wrapper">
        <div className="info-like">
          <button
            type="submit"
            aria-label="button for liking a post" 
            className="like-btn"
            onClick={onLikeIncrease}
            style={{ backgroundColor: liked ? "#ffb7d2" : "" }}
          >
            <span className="emoji" aria-label="like button">
              ❤️
            </span>
          </button>
          <span className="num-likes"> x {numLikes}</span>
        </div>
        <p className="time-stamp"> {moment(message.createdAt).fromNow()}</p>
      </div>
    </div>
  );
};