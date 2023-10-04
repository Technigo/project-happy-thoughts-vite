import "./happythought.css";
import { TimeAgo } from "../TimeAgo";

export const HappyThought = ({ thought }) => {
  const thoughts = thought;
  const handleLike = () => {
    alert("You have liked this post!");
  };
  return (
    <>
      {thoughts ? (
        <div key={thought._id} className="post-body">
          {/* <p className="post-text">My dog Mochi 🐕‍🦺</p> */}
          <p className="post-text">{thought.message}</p>
          <div className="like-and-time">
            <div className="like-data">
              <button onClick={handleLike} className="likeBtn">
                <span className="like-heart-emoji">🧡</span>
              </button>
              {/* <p className="total-likes">x0</p> */}
              <p className="total-likes">x {thought.hearts}</p>
            </div>
            {/* <p className="time-of-post">15 mins ago</p> */}
            <p className="time-of-post">
              {<TimeAgo timestamp={thought.createdAt} />}
            </p>
          </div>
        </div>
      ) : (
        "Loading..."
      )}
    </>
  );
};
