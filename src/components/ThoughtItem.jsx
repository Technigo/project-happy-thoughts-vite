import './styleForm.css';

const ThoughtItem = ({ thought, onLike }) => {
  return (
    <div className="thought-item">
      <p className="thought-message">{thought.message}</p>
      <div className="thought-hearts">
        <button
          className={`heart-button ${thought.hearts > 0 ? "liked" : ""}`}
          onClick={() => onLike(thought._id)}
          aria-label={`Like the thought: "${thought.message}". Currently has ${thought.hearts} likes`}
        >
          ❤️
        </button>
        <span className="heart-count">x {thought.hearts}</span>
      </div>
      <small className="thought-date">
        {new Date(thought.createdAt).toLocaleString()}
      </small>
    </div>
  );
};

export default ThoughtItem;
