import { formatDistance } from "date-fns";
import "../styling/messagelist.css";

export const MessageList = ({ thoughts, setThoughts, sortingOption }) => {
  //console.log(thoughts,setThoughts)
  const sortedThoughts = [...thoughts]; // Create a copy of the thoughts array

  // Sorting logic
  if (sortingOption === "highest") {
    sortedThoughts.sort((a, b) => b.hearts - a.hearts); // Sort by highest hearts
  } else if (sortingOption === "lowest") {
    sortedThoughts.sort((a, b) => a.hearts - b.hearts); // Sort by lowest hearts
  }

  // handle new likes to the API
  const handleLikeIncrease = (thoughtId) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch(
      `https://happy-thoughts-api-aes9.onrender.com/thoughts/${thoughtId}/like`,
      options
    )
      .then((response) => response.json())
      .then((json) => {
        // console.log(json);
        // Assuming the API response includes the updated like count
        const updatedThoughts = thoughts.map((thought) => {
          if (thought._id === json._id) {
            // Update the hearts count with the new value from the API
            thought.hearts = json.hearts;
          }
          return thought;
        });

        // Update the state with the new like count
        setThoughts(updatedThoughts);
      })
      .catch((error) => {
        // Handle any errors here
        console.error("Error increasing like:", error);
      });
  };
  return (
    <div className="message">
      {sortedThoughts.map((singleThought) => {
        return (
          <div className="info-wrapper" key={singleThought._id}>
            <p>{singleThought.message}</p>
            <div className="info-like">
              <button
                type="button"
                id="likeBtn"
                className="like-button"
                onClick={() => handleLikeIncrease(singleThought._id)}
              >
                <span className="emoji" aria-label="like button">
                  ❤️
                </span>
              </button>
              <span className="num-like">x{singleThought.hearts}</span>
              <span className="info-time">
                {formatDistance(new Date(singleThought.createdAt), Date.now(), {
                  addSuffix: true,
                })}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
