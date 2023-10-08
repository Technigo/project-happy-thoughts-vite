import { useEffect } from "react";
import moment from "moment";
import "./RecentThoughts.css";

export const RecentThoughts = ({ items, setItems }) => {
  //Fetching data from the API. Sends a GET request to the API endpoint and expects a JSON response.
  useEffect(() => {
    fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
      .then((response) => response.json())
      .then((json) => setItems(json)) //If the request is successful, it updates the items state with the fetched data.
      .catch((error) => console.error(error)); //If there's an error in the request, it logs the error to the console
  });

  const handleLikeClick = (itemId) => {
    // 'itemId' represents the unique identifier for the thought the user wants to like.
    // Sends a POST request to increment "hearts" for the specified thought
    fetch(
      `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${itemId}/like`,
      {
        method: "POST",
      }
    )
      .then((response) => {
        if (response.ok) {
          setItems(
            ( prevItems //'prevItems' is a parameter that represents the previous state value of items.
            ) => prevItems.map((item) =>
                item._id === itemId
                  ? { ...item, hearts: item.hearts + 1 }
                  : item
              )
          );
          //-------- ^ ---------
          // If the '_id' of the item matches the 'itemId',
          // it creates a new object using the spread ({ ...item }) to clone all properties of the current item.
          // Then, it increments the hearts property by 1 to reflect the fact that the thought has received a like.
          // The updated object is returned with the new hearts count.
          // If the _id does not match the itemId, it returns the original item without any changes.
          // --------------------
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
