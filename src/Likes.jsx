import { useState } from "react";

export const Likes = (props) => {

  const [likes, setLikes] = useState(props.hearts);
// here we make the function to make the heart (button) clickable
  const onClick = () => {
    setLikes(likes + 1);
  };

  return <button onClick={onClick}>{likes}</button>;
};
