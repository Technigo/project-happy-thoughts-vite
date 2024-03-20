import { LikeButton } from "./LikeButton";

export const ThoughtsCard = ({ thoughts, apiUrl }) => {
  return (
    <div>
      {thoughts && (
        <div className="message-container">
          {thoughts.map((thought, index) => (
            <div className="message-box" key={index}>
              {thought.message}
              <LikeButton
                likes={thought.hearts}
                thoughtID={thought._id}
                apiUrl={apiUrl}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
