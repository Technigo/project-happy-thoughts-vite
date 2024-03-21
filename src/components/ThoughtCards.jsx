import { LikeButton } from "./LikeButton";
import { formatDistance } from "date-fns";

export const ThoughtCards = ({ thoughts, apiUrl }) => {
  return (
    <>
      {thoughts && (
        <div className="thoughts-container">
          {thoughts.map((thought) => (
            <div className="box thought-box" key={thought._id}>
              {thought.message}
              <div className="likes-timestamp">
                <LikeButton
                  likes={thought.hearts}
                  thoughtID={thought._id}
                  apiUrl={apiUrl}
                />
                <span className="timestamp">
                  {formatDistance(new Date(thought.createdAt), new Date(), {
                    addSuffix: true,
                  })}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
