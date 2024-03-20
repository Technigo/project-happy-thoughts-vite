const HappyThought = ({ userMessage, onLike }) => {
  const postNewLike = () => {
    const options = {
      method: "POST",
    };
    fetch(
      "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/" +
        userMessage._id +
        "/like",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        onLike(response);
      });
  };

  return (
    <div>
      <p>
        {userMessage.message} <span>Likes: {userMessage.hearts}</span>{" "}
        <span>Post Time: {userMessage.createdAt}</span>
      </p>

      <button onClick={postNewLike}> ❤️ </button>
    </div>
  );
};

export default HappyThought;
