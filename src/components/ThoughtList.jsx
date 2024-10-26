import ThoughtItem from "./ThoughtItem";
import './styleForm.css';

const ThoughtList = ({ thoughts, onLike }) => {
  return (
    <div>
      {thoughts.map((thought) => (
        <ThoughtItem key={thought._id} thought={thought} onLike={onLike} />
      ))}
    </div>
  );
};

export default ThoughtList;
