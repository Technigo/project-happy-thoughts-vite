export const Heart = ({ emoji, label, onClick, likes }) => {
  return(
    <span 
    className="heart-button"
    role="img"
    aria-label={label ? label : ""}
    aria-hidden={label ? "false" : "true"}
    >
    <button type="submit" onClick={onClick}>
      {emoji}
    </button>
    x {likes}
    </span>
  )
}
