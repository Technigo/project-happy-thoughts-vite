export const Like = ({ apiUrl, thoughtId }) => {
  // Function for handling like action
  const handleLike = () => {
    // Send a POST request to like a thought
    fetch(`${apiUrl}/${thoughtId}/like`, {
      method: "POST",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to like thought");
        }
      })
      .catch((error) => {
        console.error("Error liking thought", error);
      });
  };
  return <button onClick={handleLike}>💗</button>;
};
