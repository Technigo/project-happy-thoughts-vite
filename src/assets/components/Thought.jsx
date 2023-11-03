import { HeartButton } from "./HeartButton";

// Function to calculate the time since the thought was posted
const timeSince = (date) => {
  const now = new Date();
  const createdAt = new Date(date);
  const secondsPast = (now.getTime() - createdAt.getTime()) / 1000;

  if (secondsPast < 60) {
    return `${Math.round(secondsPast)}s ago`;
  }
  const minutesPast = Math.floor(secondsPast / 60);
  if (minutesPast < 60) {
    return `${minutesPast}m ago`;
  }
  const hoursPast = Math.floor(minutesPast / 60);
  if (hoursPast < 24) {
    return `${hoursPast}h ago`;
  }
  const daysPast = Math.floor(hoursPast / 24);
  if (daysPast < 30) {
    return `${daysPast}d ago`;
  }
  const monthsPast = Math.floor(daysPast / 30);
  if (monthsPast < 12) {
    return `${monthsPast}mo ago`;
  }
  const yearsPast = Math.floor(monthsPast / 12);
  return `${yearsPast}y ago`;
};

export const Thought = ({ thought, onLike }) => {
  return (
    <div className="ThoughtItem">
      <p>{thought.message}</p>
      <div className="ThoughtActions">
        <HeartButton thought={thought} onLike={onLike} />
        <span className="timestamp">{timeSince(thought.createdAt)}</span>
      </div>
    </div>
  );
};
