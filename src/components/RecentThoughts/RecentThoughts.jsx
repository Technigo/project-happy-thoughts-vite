import { useEffect } from "react";
import "./RecentThoughts.css";

export const RecentThoughts = ({ items, setItems }) => {
  useEffect(() => {
    fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
      .then((response) => response.json())
      .then((json) => setItems(json))
      .catch((error) => console.error(error));
  });

  //A function to get the timestamp of each post
  const formatTimeDifference = (timestamp) => {
    const currentDate = new Date();
    const createdAtDate = new Date(timestamp);
    const timeDifference = Math.floor((currentDate - createdAtDate) / 60000); // Calculate difference in minutes

    if (timeDifference < 1) {
      return "Just now";
    } else if (timeDifference === 1) {
      return "1 minute ago";
    } else {
      return `${timeDifference} minutes ago`;
    }
  };

  const handleLikeClick = (itemId) => {
    // Send a POST request to increment "hearts" for the specified thought
    fetch(
      `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${itemId}/like`,
      {
        method: "POST",
      }
    )
      .then((response) => {
        if (response.ok) {
          // If the request is successful, update the local items array
          setItems((prevItems) =>
            prevItems.map((item) =>
              item._id === itemId ? { ...item, hearts: item.hearts + 1 } : item
            )
          );
        } else {
          console.error("Failed to like the thought.");
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="post-container">
      {items.map((item) => {
        return (
          <div className="post-message" key={item.id}>
            <p> {item.message}</p>
            <div className="info-wrapper">
              <button
                onClick={() => handleLikeClick(item._id)}
                className="heart-button"
              >
                ❤️
              </button>
              <span className="likes">x {item.hearts}</span>
            </div>
            <div className="time-stamp">
              {formatTimeDifference(item.createdAt)}
            </div>
          </div>
        );
      })}
    </div>
  );
};
