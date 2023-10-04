import { HappyThought } from "../happyThought/HappyThought";
import "./happythoughtsfeed.css";

export const HappyThoughtsFeed = ({ thoughts }) => {
  if (!thoughts || !Array.isArray(thoughts)) {
    console.log(thoughts);
    return <p>Loading...</p>;
  }

  return (
    <div className="thought-feed">
      {thoughts.length > 0 ? (
        thoughts.map(
          (oneThought) => (
            console.log(Date(oneThought.createdA)),
            (<HappyThought key={oneThought._id} thought={oneThought} />)
          )
        )
      ) : (
        <p>Loading, mate...</p>
      )}
    </div>
  );
};
