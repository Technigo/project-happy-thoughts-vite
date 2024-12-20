// component for handling list of previous posted thoughts
import ThoughtItem from "./ThoughtItem";

const ThoughtList = ({ thoughts, setThoughts }) => {
  return (
    <div className="thought-list">
      {thoughts.map((thought) => (
        <ThoughtItem key={thought._id} thought={thought} setThoughts={setThoughts} />
      ))}
    </div>
  );
};

export default ThoughtList;
