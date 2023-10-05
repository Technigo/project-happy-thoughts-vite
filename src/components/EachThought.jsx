import moment from "moment";
import { useState } from "react";

export const EachThought = ({ eachThought }) => {
  const [likes, setLikes] = useState(eachThought.hearts);
  const onLikeApi = `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${eachThought._id}/like`;
  console.log(likes);

  const onLikeIncrease = async () => {
    try {
      const response = await fetch(onLikeApi, {
        method: "POST",
      });
      if (response.ok) {
        const updatedLikes = likes + 1;
        setLikes(updatedLikes);
      } else {
        console.error("Failed to like the thought");
      }
    } catch (error) {
      console.error("An error occurred while liking the thought", error);
    }
  };
  return (
    <div className="posted-thought" key={eachThought._id}>
      <p>{eachThought.message}</p>
      <div className="hearts-time-container">
        <div className="likes">
          <button onClick={onLikeIncrease} className="likes-btn">
            <img src="./icons8-heart-64.png" alt="" />
          </button>
          <p>x {likes}</p>
        </div>
        <p key={eachThought._id}>{moment(eachThought.createdAt).fromNow()}</p>
      </div>
    </div>
  );
};