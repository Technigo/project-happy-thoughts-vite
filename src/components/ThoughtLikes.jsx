import { useState } from "react";

export const ThoughtLikes = ({ id, heart }) => {
  const [likes, setLikes] = useState(heart);

  const handleLikes = () => {
    fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${id}/like`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then(() => {
        setLikes(likes + 1);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="likes" >
      <button
        onClick={handleLikes}
        aria-label="Like-button"
        className={likes === 0 ? "heart-button" : "liked-button"
        }
        type="button"
      >
        ❤️
      </button>
      < p > Likes: {likes} </p>
    </div >
  );
};
