import { useEffect, useState } from "react";

export const Hearts = ({ thought, refetchThoughts }) => {
  const [hearts, setHearts] = useState([]);

  const postLike = () => {
    return fetch(
      `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thought.hearts}/like`,
      {
        method: "POST",
      }
    );
  };

  const HeartLike = () => {
    postLike()
      .then((response) => response.json())
      .then((data) => {
        setHearts(data.hearts);
      });
  };

  const toggleHearts = () => {
    postLike()
      .then((response) => response.json())
      .then((data) => {
        setHearts(data.hearts);
      })
      .finally(() => {
        if (refetchThoughts) {
          refetchThoughts();
        }
      });
  };

  return (
    <div className="like">
      <p className="likeHeart">{thought.message}</p>
      <button onClick={toggleHearts} className="thought-like-button">
        ❤️ {hearts}
      </button>
    </div>
  );
};
