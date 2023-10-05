import { useState, useEffect } from "react";
import { LikeButton } from "./LikeButton";

export const Thoughts = () => {
  const [thoughts, setThoughts] = useState([]);

  useEffect(() => {
    fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts`)
      .then((response) => response.json())
      .then((data) => {
        setThoughts(data);
      })
      .catch((error) => {
        console.error("Error fetching thoughts:", error);
      });
  }, []);

  const handleLike = (id) => {
    fetch(
      `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${id}/like`,
      {
        method: "POST",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        const updatedThoughts = thoughts.map((thought) => {
          if (thought._id === data._id) {
            return data;
          } else {
            return thought;
          }
        });
        setThoughts(updatedThoughts);
      })
      .catch((error) => {
        console.error("Error liking thought:", error);
      });
  };

  return (
    <div>
      {thoughts.map((thought) => (
        <div key={thought._id} className="thought-box">
          <p className="thought-text">{thought.message}</p>
          <LikeButton
            id={thought._id}
            hearts={thought.hearts}
            onLike={handleLike}
          />
        </div>
      ))}
    </div>
  );
};
