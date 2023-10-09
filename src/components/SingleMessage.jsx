import { formatDistance } from 

export const SingleMessage = ({ singleMessage, fetchPosts }) => {
    const onLikeIncrease = async (thoughts_id) => {
      // Defining options for the fetch API call, specifying that the method should be "POST"
      const options = {
        // Specifying the request method as POST
        method: "POST",
        // Setting the content type of the request to application/json
        headers: { "Content-Type": "application/json" },
      };

    
    try {
      const response = await fetch(
        `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thoughts_id}/like`,
        options
      );
     
      fetchPosts();
    } catch (error) {
      // Logging any errors that occur during the fetch operation
      console.log(error);
    }
 };
  return (
    <>
      <p>{singleMessage.message}</p>
      <div className="heart-time-container">
        <div className="heart-like">
          <button
            type="button"
            className="heart-btn"
            id="heartBtn"
            onClick={() => onLikeIncrease(singleMessage._id)}>
            <span className="heart-icon" aria-label="like button">
              ❤️
            </span>
          </button>
          <span className="number-likes"> x {singleMessage.hearts}</span>
        </div>
        <span className="time-passed">
          {" "}
          {formatDistance(new Date(singleMessage.createdAt), Date.now(), {
            addSuffix: true,
          })}{" "}
        </span>
      </div>
    </>
  );
};
