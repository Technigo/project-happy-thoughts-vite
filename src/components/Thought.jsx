import moment from "moment";
import { useEffect, useState } from "react";
import { LikeButton } from "./LikeButton";

export const Thought = ({ thought }) => {
const [likes, setLikes] = useState(thought.hearts);

  const handleDate = date => {
    const newDate = new Date(date);
    return moment(newDate).fromNow();
  };

  return (
    <article>
      <h4>{thought.message}</h4>
      <p><LikeButton thoughtId={thought._id} likes={likes} setLikes={setLikes}  /> x {likes}</p>
      <time dateTime={handleDate(thought.createdAt)}>{handleDate(thought.createdAt)}</time>
    </article>
  );
};
