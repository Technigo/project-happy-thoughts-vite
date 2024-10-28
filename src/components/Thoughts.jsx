import { useState } from "react";
import { formatDistance } from "date-fns";

export const Thoughts = ({ thoughts, fetchData}) => {
  const [like, setLike] = useState([]);
  
  const URL = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";
  
  const handleLike = async (thoughtID) => {
    try {
      const res = await fetch(`${URL}/${thoughtID}/like`, {
        method: "POST",
      });

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      if (like.includes(thoughtID)) {
        setLike(like.filter((id) => id !== thoughtID));
      } else {
        setLike([...like, thoughtID]);
      }

      fetchData(); // Refetch data to update the thoughts

    } catch (error) {
      console.log("Error is ", error);
    }
  };

  return (
    <div className="thoughts-container">
      {thoughts.map((thought) => ( 
        <div key={thought._id} className="thoughts">
          <p className="thought">{thought.message}</p>
          
          <div className="like-container">
            <button
              onClick={() => handleLike(thought._id)}
              className={`like-btn${thought.hearts > 0 ? " clicked like-btn" : ""}`} 
              // Apply "clicked" class if hearts > 0 so the heart will be pink all the time if the post is liked!
              aria-label="click to like the post"
            >
              ❤️
            </button>
            <p
              className="like-number">
              x {thought.hearts}
            </p>
            <p
              className="like-time">{formatDistance(new Date(thought.createdAt), Date.now(), { addSuffix: true })}</p>
          </div>
        </div>
       ))}
    </div>  
  );
};