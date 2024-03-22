export const Heart = ({ emoji, label, onClick, likes, time }) => {
  return (
    <span
      className="heart-container"
      role="img"
      aria-label={label ? label : ""}
      aria-hidden={label ? "false" : "true"}
    >
      <button className="heart-button" type="submit" onClick={onClick}>
        {emoji}
      </button>
      <span className="likes"> x {likes}</span>
      <p>{time}</p>
    </span>
  );
};
