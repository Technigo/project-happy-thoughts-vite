/**
 * 1. Import styling file ✅
 * 2. Get the thoughts and render them in a list ✅
 * 3. Listen to the like button and add an onClick event to it will incease each time. ✅
 * 4. At date-fns to update the time when the thought was created. Use date-fns that is more lightweight. Install npm install date-fns ✅
 */
import { useState, useEffect } from "react";
import { makeLikeRequest } from "../Api";
import { formatDistanceToNow } from "date-fns";
import { enUS } from "date-fns/locale";
import { ThoughtLikesCounter } from "./ThoughtLikesCounter";
import "./ThoughtList.scss";

export const ThoughtList = ({ thoughts }) => {
  const [likes, setLikes] = useState({});

  useEffect(() => {
    // Initialize likes from the API
    const initialLikes = {};
    thoughts.forEach((thought) => {
      initialLikes[thought._id] = thought.hearts;
    });
    setLikes(initialLikes);
  }, [thoughts]);

  const handleLikes = async (id) => {
    try {
      // Check if the post has been liked before
      const hasLikedBefore = localStorage.getItem(`liked_${id}`);

      // Send a POST request to update the likes
      await makeLikeRequest(id);

      // Update the likes in local storage
      localStorage.setItem(`liked_${id}`, "true");
      localStorage.setItem(`likes_${id}`, likes[id] + 1);

      // Update the likes in component state
      setLikes((prevLikes) => ({
        ...prevLikes,
        [id]: prevLikes[id] + 1,
      }));
    } catch (err) {
      console.error("Error updating likes", err);
    }
  };

  const checkNewThought = (thought) => {
    // Thought timestamp
    const thoughtTimestamp = new Date(thought.createdAt);
    const currentTime = new Date();
    // Calculate the difference in milliseconds
    const timeDiff = currentTime - thoughtTimestamp;
    // Check if message was created less than a minute ago
    return timeDiff <= 60000;
  };

  return (
    <div className="list-wrapper">
      <ThoughtLikesCounter thoughts={thoughts} />
      {thoughts.map((thought) => (
        <div key={thought._id} className="message">
          <p>{thought.message}</p>
          <div className="info-wrapper">
            <div className="info-like">
              {/* add onClick to handle Likes */}
              <button
                id="likeBtn"
                onClick={() => handleLikes(thought._id)}
                className={`like-button ${
                  checkNewThought(thought) ? "new-thought" : ""
                }`}
                type="button"
              >
                <span className="emoji" aria-label="like button">
                  ❤️
                </span>
              </button>
              {/* update the num of likes */}
              <span className="num-likes">
                {thought.hearts + likes[thought._id]}x
              </span>
            </div>
            <div className="info-time">
              {formatDistanceToNow(new Date(thought.createdAt), {
                locale: enUS, // set locale
                addSuffix: true, // This adds "ago" at the end
              })}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
