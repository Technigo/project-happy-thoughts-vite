import { useState, useEffect } from "react";

export const ThoughtLikes = ({ id, heart }) => {
  const [likes, setLikes] = useState(() => {
    const savedLikes = localStorage.getItem(`likes-${id}`);
    return savedLikes !== null ? Number(savedLikes) : Number(heart) || 0;
  });

  useEffect(() => {
    localStorage.setItem(`likes-${id}`, likes);
  }, [likes, id]);

  const handleLikes = () => {
    fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${id}/like`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(() => {
        setLikes((prevLikes) => prevLikes + 1);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="likes">
      <button
        onClick={handleLikes}
        aria-label="Like-button"
        className={likes === 0 ? "heart-button" : "liked-button"}
        type="button"
      >
        ❤️
      </button>
      <p>x {likes}</p>
    </div>
  );
};
