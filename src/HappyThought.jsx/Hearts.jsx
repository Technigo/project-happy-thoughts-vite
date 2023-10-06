import { useEffect, useState } from "react";

export const Hearts = ({ thought, refetchThoughts }) => {
  const [hearts, setHearts] = useState([]);

  const postHeart = () => {
    return fetch(
      `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thought.hearts}/like`,
      {
        method: "POST",
      }
    );
  };

  const HeartLike = () => {
    console.log("HeartLike function called");
    postHeart()
      .then((response) => response.json())
      .then((data) => {
        console.log("Response data:", data);
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
      <button onClick={HeartLike} className="thoughtLikeButton">
        ❤️ {hearts}
      </button>
    </div>
  );
};
