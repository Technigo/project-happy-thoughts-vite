// Component for rendering individual messages in the ThoughtList
import "./ThoughtItem.css";

// ThoughtItem component displays a single thought and its interactions
const ThoughtItem = ({ thought, setThoughts }) => {
  const handleLike = () => {
        // Send a POST request to like the thought
    fetch(`https://project-happy-thoughts-api-pxns.onrender.com/thoughts/${thought._id}/like`, {
      method: "POST",
    })  
      .then((res) => res.json())
      .then((updatedThought) => {
        setThoughts((prevThoughts) =>
          prevThoughts.map((t) => (t._id === updatedThought._id ? updatedThought : t))
        );
      });
  };

  // Helper function to calculate how long ago the thought was created
  const getTimeAgo = (createdAt) => {
      const now = new Date();
      const createdTime = new Date(createdAt);
      const diffInMs = now - createdTime;
          
      // Calculate time differences in seconds, minutes, hours, and days
      const seconds = Math.max(0, Math.floor(diffInMs / 1000));
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);
  
      // Return a human-readable string indicating how long ago the thought was created
      if (days > 0) return `${days} day${days > 1 ? "s" : ""} ago`;
      if (hours > 0) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
      if (minutes > 0) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
      return `${seconds} second${seconds !== 1 ? "s" : ""} ago`;
    };

  return (
    <div className="thought-card">
      <div className="thought-message">
      <p>{thought.message}</p>
      </div>
      <div className="thought-footer">

        {/* Make the heart clickable and use handleLike */}
        <div className="heart-section" onClick={handleLike}>
        <button className={`heart-icon ${thought.hearts > 0 ? "liked" : ""}`}>
            ❤️
          </button>
        <span className="heart-count"> x {thought.hearts}</span>
      </div>
              {/* Display time ago in the bottom right */}
              <div className="time-stamp">
          <span>{getTimeAgo(thought.createdAt)}</span>
        </div>
      </div>
    </div>
  );
};

// Export the ThoughtItem component for use in other parts of the app
export default ThoughtItem;
