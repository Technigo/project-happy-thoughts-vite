import { useState } from "react";

export const Likes = (props) => {
  const [likes, setLikes] = useState(props.hearts);
  // here we make the function to make the heart (button) clickable
  const onClick = () => {
    // this is the URL to like a post
    const url = `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${props.id}/like`;
    console.log(url);
    setLikes(likes + 1);
  };

  // POST <>

  return <button onClick={onClick}>{likes}</button>;
};
