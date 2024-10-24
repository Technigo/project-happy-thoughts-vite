/* eslint-disable react/prop-types */
// ThoughtList acts as the parent component that passes props to SingleThought
// It receives 'thoughts' and 'onLike' as props from its parent component (App.jsx)

import { SingleThought } from "./SingleThought";

// 'thoughts'= array of thought objects,
//  each containing the message, hearts, and creation time
// 'onLike' = a function (callback), handles the likes for a specific thought.
export const ThoughtList = ({ thoughts, onLike }) => {
  return (
    <div>
      {/* 'thoughts' array is iterated over using the .map() method.
        For each thought in the array, it renders a SingleThought component.
        Each thought object is passed as a prop to the SingleThought component.
        This allows SingleThought to know which thought's details to display.*/}
      {thoughts.map((thought) => (
        <SingleThought
          key={thought._id} //Each thought in the array has a unique '_id' property, which is used as the 'key'
          thought={thought}
          onLike={onLike} // Pass the onLike handler to the SingleThought component
        />
      ))}
    </div>
  );
};
