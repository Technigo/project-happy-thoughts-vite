import { useEffect } from "react";
import moment from "moment"; //import moment so that timestamp work
import "./RecentThoughts.css"; //import styling

export const RecentThoughts = ({ items, setItems }) => {
  // Fetching data from the API.
  useEffect(() => {
    // Sends a GET request to the API endpoint and expects a JSON response.
    fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
      .then((response) => response.json()) // Parse the response as JSON
      .then((json) => setItems(json)) // If the request is successful, update the items state with the fetched data.
      .catch((error) => console.error(error)); // If there's an error in the request, log the error to the console.
  });

  // Handler for liking a thought.
  const handleLikeClick = (itemId) => {
    // Sends a POST request to increment "hearts" for the specified thought.
    fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${itemId}/like`, {
      method: "POST",
    })
      .then((response) => {
        if (response.ok) {
          // If the response is OK, update the items state with the liked thought.
          setItems((prevItems) =>
               // Map through the previous items and update the one with a matching ID.
            prevItems.map((item) =>
              item._id === itemId
                ? { ...item, hearts: item.hearts + 1 } // Increment hearts for the liked thought.
                : item
            )
          );
        } else {
          console.error("Failed to like the thought."); // Log an error message if liking the thought fails.
        }
      })
      .catch((error) => console.error(error)); // Catch and log any errors that occur during the process.
  };

  // Rendering the thought items with like buttons and timestamps.
  return (
    <div className="post-container">
      {items.map((item) => {
        return (
          <div className="post-message" key={item.id}>
            <p>{item.message}</p>
            <div className="info-wrapper">
              <div>
                <button
                  onClick={() => handleLikeClick(item._id)} // Call the handleLikeClick function with the thought's ID.
                  className="heart-button"
                >
                  ❤️
                </button>
                <span className="likes"> x {item.hearts}</span> {/*Display the number of likes for the thought.*/}
              </div>
              <div className="time-stamp">
                {moment(item.createdAt).fromNow()} {/* Display the timestamp relative to the current time. */}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
