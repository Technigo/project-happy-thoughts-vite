// ListThoughts.jsx
import { ThoughtCard } from './ThoughtCard';

export const ListThoughts = ({ thoughts }) => {
  return (
    <div className="thoughts-list">
      {/* Map through thoughts array and create a card for each thought */}
      {thoughts.map((thought) => (
        <ThoughtCard key={thought._id} thought={thought} />
      ))}
    </div>
  );
};
