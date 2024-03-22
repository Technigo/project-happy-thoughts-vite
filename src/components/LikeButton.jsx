import PropTypes from "prop-types";
import "./LikeButton.css";

export const LikeButton = ({ thought, setThoughts }) => {
  const handleLikeClick = () => {
    const newNum = thought.hearts + 1;
    const URL = `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thought._id}/like`;

    //Posting the new Like of someone to the API
    fetch(URL, {
      method: "POST",
      body: JSON.stringify({ likes: newNum }),
    })
      .then((result) => result.json())
      .then((newLike) => {
        setThoughts((prevThoughts) => {
          return prevThoughts.map((t) =>
            t._id === thought._id ? { ...t, hearts: newLike.hearts } : t
          );
        });
      })
      .catch((error) => {
        console.error("Error updating likes:", error);
      });
  };

  return (
    <button
      className={
        thought.hearts === 0 ? "like-button-default" : "like-button-liked"
      }
      onClick={handleLikeClick}
    >
      ❤️
    </button>
  );
};

LikeButton.propTypes = {
  setThoughts: PropTypes.any,
  thought: PropTypes.any,
};
