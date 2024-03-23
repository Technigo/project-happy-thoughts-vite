export const Heart = ({ emoji, label, onClick, likes, time }) => {
  return (
    <div
      className="heart-container"
      role="img"
      aria-label={label ? label : ""}
      aria-hidden={label ? "false" : "true"}
    >
      <div className="heart-likes">
        <button className="heart-button" type="submit" onClick={onClick}>
          {emoji}
        </button>
        <p>x{likes}</p>
      </div>
      <p className="time">{time}</p>
    </div>
  );
};
