import PropTypes from "prop-types";
import { useState } from "react";

export const HeartButton = ({
  likes,
  thoughtId,
  messageData,
  setMessageData,
  totalNumberOfLikes,
  setTotalNumberOfLikes,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const handleLike = (thoughtId) => {
    fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thoughtId}/like`, {
      method: "POST",
    })
      .then((response) => response.json())
      .catch((error) => console.log(error));

    // updates the state with the total number of likes the user have made.
    setTotalNumberOfLikes(totalNumberOfLikes + 1);
    // updates the total number of likes the user have done over multiple session to the local storage
    localStorage.setItem("numberOfLikes", (parseInt(totalNumberOfLikes) + 1).toString());

    // increment the likes of the heartbutton by one on each click for the chosen post.
    setMessageData(
      messageData.map((thought) => (thought._id === thoughtId ? { ...thought, hearts: thought.hearts + 1 } : thought))
    );
    setIsLiked(!isLiked);
  };

  return (
    <>
      <button className={`heartbutton ${isLiked ? "liked" : ""}`} onClick={() => handleLike(thoughtId)}>
        ❤️
      </button>
      <p> x{likes}</p>
    </>
  );
};

HeartButton.propTypes = {
  likes: PropTypes.number,
  thoughtId: PropTypes.string,
  messageData: PropTypes.array,
  setMessageData: PropTypes.func,
  totalNumberOfLikes: PropTypes.number,
  setTotalNumberOfLikes: PropTypes.func,
};
