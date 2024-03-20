import { useEffect } from "react";
import moment from "moment";
import "./RecentThoughts.css";

export const RecentThoughts = ({ items, setItems }) => {
  useEffect(() => {
    fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
      .then((response) => response.json())
      .then((json) => setItems(json));
  });

  const handleLikeClick = (itemId) => {
    fetch(
      `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${itemId}/like`,
      {
        method: "POST",
      }
    )
      .then((response) => {
        if (response.ok) {
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
            <p>{item.message}</p>
            <div className="info-wrapper">
              <div>
                <button
                  onClick={() => handleLikeClick(item._id)}
                  className="heart-button"
                >
                  ❤️
                </button>
                <span className="likes"> x {item.hearts}</span>
              </div>
              <div className="time-stamp">
                {moment(item.createdAt).fromNow()}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
