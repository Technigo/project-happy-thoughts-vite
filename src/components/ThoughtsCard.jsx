import { LikeButton } from "./LikeButton";
import { formatDistance } from "date-fns";

export const ThoughtsCard = ({ thoughts, apiUrl }) => {
  return (
    <div>
      {thoughts && (
        <div className="message-container">
          {thoughts.map((thought) => (
            <div className="message-box" key={thought._id}>
              {thought.message}
              <div className="likes-time">
                <LikeButton
                  likes={thought.hearts}
                  thoughtID={thought._id}
                  apiUrl={apiUrl}
                />
                <span>
                  {formatDistance(new Date(thought.createdAt), new Date(), {
                    addSuffix: true,
                  })}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
