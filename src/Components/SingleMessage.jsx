import { useState } from "react";

export const SingleMessage = ({ singleMessage, fetchPosts, handleLike }) => {
  const [liked, setLiked] = useState(false);
  const [numLikes, setNumLikes] = useState(singleMessage.hearts);

  const onLikeIncrease = async () => {
    try {
      
      if (typeof handleLike === 'function') {
        const updatedMessage = await handleLike(singleMessage._id);

  
        if (updatedMessage) {
          setNumLikes((prevNumLikes) => prevNumLikes + 1);
          setLiked(true);
          fetchPosts();
        }
      } else {
        console.error("handleLike is not a function");
      }
    } catch (error) {
      console.error("Error occurred while liking the thought", error);
    }
  };
  
  const calculateTimeAgo = (createdAt) => {
    const currentTime = new Date();
    const messageTime = new Date(createdAt);
    const timeDifference = Math.floor(
      (currentTime - messageTime) / (1000 * 60)
    );
    return `${timeDifference} minutes ago`;
  };

  return (
    <div className="thought">
      <div className="thought-content">
        <p>{singleMessage.message}</p>
      </div>
      <div className="thought-actions">
        <div className="like-area">
          <button
            className={`like-button ${liked ? "liked" : ""}`}
            onClick={onLikeIncrease}
          >
            <span role="img" aria-label="Heart">
              ❤️
            </span>
          </button>
          <p className="num-likes">x{numLikes}</p>
        </div>
        <div className="info-time">
          {calculateTimeAgo(singleMessage.createdAt)}
        </div>
      </div>
    </div>
  );
};




