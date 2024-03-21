/*import { useState } from "react";
import PropTypes from "prop-types";

export const LikeButton = ({ thoughtId, thoughts, setThoughts }) => {
  const URL = `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thoughtId}/like`;

  const [setLikes] = useState();

  const handleLikeClick = async (event) => {
    event.preventDefault();

    fetch(URL, {
      method: "POST",
    })
      .then((result) => result.json())
      .then((newLike) => {
        setThoughts((prevThoughts) =>
          prevThoughts.map((like) =>
            like._id === newLike._id ? newLike : like
          )
        );
        setLikes((prevLikes) => prevLikes + 1);
      })
      .catch((error) => {
        console.error("Error fetching the data:", error);
      });
  };

  return (
    <div>
      {thoughts.map((thought) => (
        <div key={thought._id}>
          <button onClick={handleLikeClick}>Like</button>
        </div>
      ))}
    </div>
  );
};

LikeButton.propTypes = {
  thoughts: PropTypes.any,
  thoughtId: PropTypes.any,
  setThoughts: PropTypes.any,
};
*/
