import { Like } from "./Like";

// RecentThoughts Component
export const RecentThoughts = ({ thoughts, likes, handleLike }) => {
  // Function to get how many seconds, minutes or hours ago it was posted
  const formatTimeAgo = (createdAt) => {
    const now = new Date();
    const created = new Date(createdAt);
    const diffInSeconds = Math.floor((now - created) / 1000);

    if (diffInSeconds < 60) {
      return `${diffInSeconds} seconds`;
    } else if (diffInSeconds < 3600) {
      const diffInMinutes = Math.floor(diffInSeconds / 60);
      return `${diffInMinutes} minutes`;
    } else {
      const diffInHours = Math.floor(diffInSeconds / 3600);
      return `${diffInHours} hours`;
    }
  };

  //Function to render thoughts
  const renderRecentThoughts = () => {
    return thoughts.map((thought) => (
      <li key={thought._id} className="thought">
        <p>{thought.message}</p>
        <div className="thought-features">
          <Like thoughtId={thought._id} handleLike={handleLike} />
          <p> x {likes[thought._id] || thought.hearts}</p>
          <p> {formatTimeAgo(thought.createdAt)} ago</p>
        </div>
      </li>
    ));
  };

  return <ul className="thoughts">{renderRecentThoughts()}</ul>;
};
