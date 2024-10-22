
import './styleForm.css';  // Add styles for your form

const ThoughtItem = ({ thought }) => {
  return (
    <div className="thought-item">
      <p>{thought.message}</p>
    </div>
  );
};
