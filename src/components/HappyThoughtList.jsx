import { formatDistanceToNow } from "date-fns";
import { HappyThoughtLikes } from "./HappyThoughtLikes";
import "./HappyThought.css";

export const HappyThoughtList = ({ thoughts }) => {
  return (
    <section className="thought-section">
      {thoughts.map((thought) => (
        <div className="thought-container" key={thought._id}>
          <div className="thought-message">
            <p>{thought.message}</p>
            <div className="info-wrapper">
              <div className="info-likes">
                <HappyThoughtLikes id={thought._id} hearts={thought.hearts} />
              </div>
              <div className="info-time">
                <div className="time">
                  {formatDistanceToNow(
                    new Date(thought.createdAt),
                    new Date(),
                    { addSuffix: true }
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
