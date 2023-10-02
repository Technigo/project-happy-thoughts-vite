// import { SingleMessage } from "./SingleMessage";
export const MessageList = ({ thoughts }) => {
  console.log(thoughts);
  return (
    <div className="message">
      {thoughts.map((singleThought) => {
        return (
          <div className="info-wrapper" key={singleThought._id}>
            <p>{singleThought.message}</p>
            <div className="info-like">
              <button type="button" id="likeBtn" className="like-button">
                <span className="emoji" aria-label="like button">
                  ❤️
                </span>
              </button>
              <span className="num-like">x {singleThought.hearts}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
