// Importing `useState` and `useEffect` hooks from "react" library
import { useEffect, useState } from "react";
import moment from "moment";

export const EachThought = ({ eachThought, onLikeChange }) => {
  const [liked, setLiked] = useState(false);
  const [numLikes, setNumLikes] = useState(eachThought.hearts);
  // console.log(eachThought);

  const onLikeApi = `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${eachThought._id}/like`;

  useEffect(() => {
    // Check if the thought is liked by the user and set liked accordingly
    const likedThoughts =
      JSON.parse(localStorage.getItem("likedThoughts")) || [];
    if (likedThoughts.includes(eachThought._id)) {
      setLiked(true);
    }
  }, [eachThought._id]);

  const toggleLike = async () => {
    if (!liked) {
      try {
        const response = await fetch(onLikeApi, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const updatedLikes = numLikes + 1;
          setNumLikes(updatedLikes);
          setLiked(true);
          onLikeChange(1);
        }
      } catch (error) {
        console.error("An error occurred while liking the thought:", error);
      }
    }
  };

  return (
    <div className="posted-thought" key={eachThought._id}>
      <p>{eachThought.message}</p>
      <div className="hearts-time-container">
        <div className="likes">
          <button
            onClick={toggleLike}
            className={`likes-btn ${liked ? "liked" : ""}`}
          >
            <img src="./icons8-heart-64.png" alt="" />
          </button>
          <p>x {numLikes}</p>
        </div>
        <p key={eachThought._id}>{moment(eachThought.createdAt).fromNow()}</p>
      </div>
    </div>
  );
};
