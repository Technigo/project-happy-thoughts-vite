import { Thought } from "./Thought";

export const ThoughtList = ({ thoughts, onLike, totalUserLikes, setTotalUserLikes, likedThoughts }) => {
  return (
    <div className="ThoughtList">
      {thoughts.map((thought) => (
        <Thought
          key={thought._id}
          thought={thought}
          onLike={onLike}
          totalUserLikes={totalUserLikes}
          setTotalUserLikes={setTotalUserLikes}
          likedThoughts={likedThoughts}
        />
      ))}
    </div>
  );
};

