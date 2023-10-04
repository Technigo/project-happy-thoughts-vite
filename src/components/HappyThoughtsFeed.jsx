import { HappyThought } from "./happyThought/HappyThought";

export const HappyThoughtsFeed = (thoughts) => {
  return (
    <div>
      {thoughts.map((singleThought) => (
        <HappyThought key={singleThought.id} thought={singleThought} />
      ))}
    </div>
  );
};
