import moment from "moment";

import { Like } from "./Like";

// RecentThoughts Component
export const RecentThoughts = ({ thoughts, likes, handleLike }) => {
  // Function to get how many seconds, minutes or hours ago it was posted

  const timeAgo = (createdAt) => {
    return moment(createdAt).fromNow();
  };

  //Function to render thoughts
  const renderRecentThoughts = () => {
    return thoughts.map((thought) => (
      <li key={thought._id} className="thought">
        <p>{thought.message}</p>
        <div className="thought-features">
          <Like thoughtId={thought._id} handleLike={handleLike} />
          <p> x {likes[thought._id] || thought.hearts}</p>
          <p> {timeAgo(thought.createdAt)}</p>
        </div>
      </li>
    ));
  };

  return <ul className="thoughts">{renderRecentThoughts()}</ul>;
};
