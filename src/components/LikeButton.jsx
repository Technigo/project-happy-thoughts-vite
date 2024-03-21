import { useState } from "react";

const LikeButton = ({ userMessageId, onLike }) => {
  const [hasBeenLiked, setHasBeenLiked] = useState(false);

  const postNewLike = () => {
    const options = {
      method: "POST",
    };
    fetch(
      "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/" +
        userMessageId +
        "/like",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setHasBeenLiked(true);
        onLike(response);
      });
  };

  return (
    <button onClick={hasBeenLiked ? undefined : postNewLike}> ❤️ </button>
    /** className={hasBeenClicked ? 'button--clicked' : ''} */
  );
};

export default LikeButton;
