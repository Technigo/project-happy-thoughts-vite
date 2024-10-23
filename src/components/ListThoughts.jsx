// ListThoughts.jsx 
import { ThoughtCard } from './ThoughtCard';

export const ListThoughts = ({ thoughts }) => {
  return ( <div className="thoughts-list">
         {/* We'll add the form component here */}
        {thoughts.map((thought) => (
          <ThoughtCard key={thought._id} thought={thought} />
        ))}
      </div>
  );
};