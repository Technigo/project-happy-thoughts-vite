import { MessageContent } from "./MessageContent";
import { MessageFooter } from "./MessageFooter";

export const Thought = ({ thoughts, handleHeartClick, likedThoughts }) => {
  return thoughts.map((thought) => (
    <div key={thought._id} className="thought-container">
      <MessageContent message={thought.message} />
      <MessageFooter
        thoughtId={thought._id}
        hearts={thought.hearts}
        createdAt={thought.createdAt}
        handleHeartClick={handleHeartClick}
        isLiked={likedThoughts.includes(thought._id)}
      />
    </div>
  ));
};
