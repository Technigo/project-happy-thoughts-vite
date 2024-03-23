import PropTypes from "prop-types";

export const HeartButton = ({ likes, thoughtId, messageData, setMessageData }) => {
  const handleLike = (thoughtId) => {
    fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thoughtId}/like`, {
      method: "POST",
    })
      .then((response) => response.json())
      .catch((error) => console.log(error));

    // increment the likes of the heartbutton by one on each click //
    setMessageData(
      messageData.map((thought) => (thought._id === thoughtId ? { ...thought, hearts: thought.hearts + 1 } : thought))
    );
  };

  return (
    <>
      <button onClick={() => handleLike(thoughtId)}>❤️</button>
      <p> x {likes}</p>
    </>
  );
};

HeartButton.propTypes = {
  likes: PropTypes.number,
  thoughtId: PropTypes.string,
  messageData: PropTypes.array,
  setMessageData: PropTypes.func,
};
