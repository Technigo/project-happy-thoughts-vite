export const HeartButton = ({ thoughtId, onLike }) => {
  const handleLike = async () => {
    try {
      const response = await fetch(
        `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thoughtId._id}/like`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        onLike(thoughtId);
      } else {
        console.error("Failed to like thought");
      }
    } catch (error) {
      console.error("Error liking thought", error);
    }
  };

  return (
    <button onClick={handleLike} aria-label="Like thought">
      ❤️
    </button>
  );
};
