import { useState } from "react";
import PropTypes from "prop-types";

const API_URL = " https://project-happy-thoughts-api-3unj.onrender.com";

const LikeButton = ({ userMessageId, onLike }) => {
  const [hasBeenLiked, setHasBeenLiked] = useState(false);

  const postNewLike = () => {
    const options = {
      method: "POST",
    };
    fetch(`${API_URL}/thoughts/${userMessageId}/like`, options)
      .then((response) => response.json())
      .then((response) => {
        setHasBeenLiked(true);
        onLike(response);
      });
  };

  return (
    <button
      className={hasBeenLiked ? "button--liked" : ""}
      onClick={hasBeenLiked ? undefined : postNewLike}
    >
      {" "}
      ❤️{" "}
    </button>
  );
};

export default LikeButton;

LikeButton.propTypes = {
  userMessageId: PropTypes.string.isRequired,
  onLike: PropTypes.func.isRequired,
};
