import { HappyThought } from "../happyThought/HappyThought";
import "./happythoughtsfeed.css";

export const HappyThoughtsFeed = ({ thoughts, setLikeCounter }) => {
  if (!thoughts || !Array.isArray(thoughts)) {
    console.log(thoughts);
    return <p>Loading...</p>;
  }

  return (
    <div className="thought-feed">
      {thoughts.length > 0 ? (
        thoughts.map((oneThought) => (
          <HappyThought
            key={oneThought._id}
            thought={oneThought}
            setLikeCounter={setLikeCounter}
          />
        ))
      ) : (
        <p>Loading, mate...</p>
      )}
    </div>
  );
};
