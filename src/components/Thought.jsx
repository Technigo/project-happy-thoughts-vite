import moment from "moment";
import { useState } from "react";
import { LikeButton } from "./LikeButton";

export const Thought = ({ thought }) => {
  const [likes, setLikes] = useState(thought.hearts);

  const handleDate = date => {
    const newDate = new Date(date);
    return moment(newDate).fromNow();
  };

  return (
    <article className="thought">
      <h3>{thought.message}</h3>
      <div className="like-container">
        <LikeButton
          thoughtId={thought._id}
          likes={likes}
          setLikes={setLikes}
        />
        <p> x {likes}</p>
      </div>
      <time
        className="thought-time"
        dateTime={handleDate(thought.createdAt)}>
        {handleDate(thought.createdAt)}
      </time>
    </article>
  );
};
