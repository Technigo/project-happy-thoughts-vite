/* eslint-disable react/prop-types */
import "../Styles/ThoughtList.css"

export const ThoughtList = ({ thoughts }) => {

  return (
    <div className="thought-list">
      {thoughts.map((thought) => (
        <div key={thought._id}>
          <div className="thought-message-box">
            <p>{thought.message}</p>
            <p>❤️ {thought.hearts}</p>
          </div>
        </div>
      ))}
    </div>
  );
};