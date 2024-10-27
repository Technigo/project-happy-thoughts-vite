import ThoughtItem from "./ThoughtItem";
import './styleForm.css';  // Add styles for your form


const ThoughtList = ({ thoughts }) => {
  return (
    <div>
      {thoughts.map((thought) => (
        <ThoughtItem key={thought._id} thought={thought} />
      ))}
    </div>
  );
};

export default ThoughtList;