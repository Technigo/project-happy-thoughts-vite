import { formatDistance } from "date-fns";

export const MessageList = ({ thoughts, setThoughts }) => {
  //console.log(thoughts,setThoughts)

  // handle new likes to the API
  const handleLikeIncrease = async (_id) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };
    await fetch(
      `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${_id}/like`,
      options
    )
      .then((response) => response.json())
      .then((json) => {
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
      {thoughts.map((singleThought) => {
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
              <span className="num-like">x {singleThought.hearts}</span>
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
