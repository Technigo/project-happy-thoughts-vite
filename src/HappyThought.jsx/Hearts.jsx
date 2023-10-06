import { useEffect, useState } from "react";

export const Hearts = ({ thought, refetchThoughts }) => {
  const [hearts, setHearts] = useState([]);

  const addHeart = () => {
    return fetch(
      `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thought._id}/like`,
      {
        method: "POST",
      }
    );
  };
  console.log(thought._id);

  const HeartLike = () => {
    console.log("HeartLike function called");
    addHeart()
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
      <p className="likeHeart">{thought._id}</p>
      <button onClick={HeartLike} className="thoughtLikeButton">
        ❤️ {hearts}
      </button>
    </div>
  );
};
