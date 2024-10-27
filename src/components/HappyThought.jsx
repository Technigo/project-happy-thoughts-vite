
export const HappyThought = ({ thought, onLike }) => {
  return (
    <div className="happy-thought">
      <p>{thought.message}</p>
      <button className="heart-button" onClick={() => onLike(thought._id)}>🩷</button>
      <span className="likes-count">x {thought.hearts}</span>
    </div>
  );
};
