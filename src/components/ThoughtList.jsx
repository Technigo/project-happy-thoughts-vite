// ThoughtList.jsx

import { formatDistanceToNow } from 'date-fns';
import { ThoughtLikes } from "./ThoughtLikes.jsx";

export const ThoughtList = ({ thoughts }) => {
  return (
    <section className="thought-section">
      {thoughts.map((thought) => (
        <div className="thought-wrapper" key={thought._id}>
          <div className="input-message">{thought.message}</div>
          <div className="info-wrapper">
            <ThoughtLikes id={thought._id} hearts={thought.hearts} />
            <div className="time">
              {formatDistanceToNow(new Date(thought.createdAt), {
                addSuffix: true,
              })}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
