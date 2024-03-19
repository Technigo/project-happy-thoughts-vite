import { useState } from "react";

export const SingleMessage = ({ singleMessage, fetchPosts, setLikeCounter }) => {
  const [liked, setLiked] = useState(false);
  const [numLikes, setNumLikes] = useState(0);

  // const onLikeIncrease = async () => {
  //   try {
      
  //     if (typeof handleLike === 'function') {
  //       const updatedMessage = await handleLike(singleMessage._id);

  
  //       if (updatedMessage) {
  //         setNumLikes((prevNumLikes) => prevNumLikes + 1);
  //         setLiked(true);
  //         fetchPosts();
  //       }
  //     } else {
  //       console.error("handleLike is not a function");
  //     }
  //   } catch (error) {
  //     console.error("Error occurred while liking the thought", error);
  //   }
  // };


  const handleLike = async (e) => {
    e.preventDefault();

    if (!liked) {
      setLiked(true);
    }
    setNumLikes((prevLikes) => prevLikes + 1);
    setLikeCounter((likesSoFar) => likesSoFar + 1);
    const options = {
      method: "PUT", // Specifying the request method as POST
      // Setting the content type of the request to application/json
      headers: { "Content-Type": "application/json" },
    };

    await fetch(
      `https://happy-thoughts-api-backend-45u2.onrender.com/thoughts/${thought._id}/like`,
      options
    )
      .then((response) => response.json()) // Parsing the response as JSON
      .then((data) => {
        setTotalHearts(data.hearts);
      })
      // Logging any errors that occur during the fetch operation
      .catch((error) => console.log(error));
  };
  
  const onLikeIncrease = async () => {
    try {
      if (typeof handleLike === "function") {
        // Assuming handleLike returns updated data
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
                onClick={handleLike}
                className="like-button"
                style={{ backgroundColor: !liked ? "pink" : "#ee8bb4" }}
              >
                <span className="like-heart-emoji">🧡</span>
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




