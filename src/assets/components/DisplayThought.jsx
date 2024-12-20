//Child-component that retrieves the list of happy thoughts from the API and display them.
import "./DisplayThought.css";
import { formatDistanceToNow } from "date-fns";


export const DisplayThoughts = ({ happyThoughts, isLoading, postLike }) => {
  if (isLoading) {
    return <p>Loading thoughts...</p>;
  }

  // Function to convert the "time ago" for each thought to seconds/minutes/hours/days - using external library date-fns
  const timeAgo = (createdAt) => {
    const timeDifference = Math.floor((new Date() - new Date(createdAt)) / 1000);

    if (timeDifference < 60) {
      return '0 seconds ago';
    }
    return formatDistanceToNow(new Date(createdAt)) + ' ago';
  };

  const onClick = (thought) => {
    postLike(thought._id)
  };

  return (
    <>
      <ul className="thought-list">
        {happyThoughts.map((thought) => (
          <li key={thought._id} className="thought-item">
            <div className="thought-display">
              <p>{thought.message}</p>
              <div className="info-like-container">
                <div className="like-container" onClick={() => onClick(thought)}>
                  <button>❤️</button>
                  <p>x {thought.hearts}</p>
                </div>
                <div className="info-container">
                  <p>{timeAgo(thought.createdAt)} </p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};