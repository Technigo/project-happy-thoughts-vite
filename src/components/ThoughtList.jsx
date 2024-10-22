/* eslint-disable react/prop-types */
import { SingleThought } from "./SingleThought";

// Adjust ThoughtList to receive thoughts and onLike as props
export const ThoughtList = ({ thoughts, onLike }) => {
  return (
    <div>
      {thoughts.map((thought) => (
        <SingleThought
          key={thought._id} // Ensure unique key with _id
          thought={thought}
          onLike={onLike} // Pass the onLike handler to the SingleThought component
        />
      ))}
    </div>
  );
};
