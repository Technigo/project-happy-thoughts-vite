import './ThoughtList.css';
import { ThoughtItem } from "./ThoughtItem";

export const ThoughtList = ({ thoughts, onLike, likedThoughts }) => (
  <div className="thought-list">
    {thoughts.map((thought) => (
      <ThoughtItem
        key={thought._id}
        thought={thought}
        isLiked={likedThoughts.includes(thought._id)}
        onLike={onLike}
      />
    ))}
  </div>
);
