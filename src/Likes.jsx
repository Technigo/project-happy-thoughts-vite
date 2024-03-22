import { useState } from "react";

export const Likes = (props) => {
  const [likes, setLikes] = useState(props.hearts);
  // here we make the function to make the heart (button) clickable
  const onClick = () => {
    // this is the URL to like a post
    // testing if the like button work, it should be status 200. 200 is good. 400 is bad (404)
    const url = `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${props.id}/like`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: "",
    });
    setLikes(likes + 1);
  };

  // POST <>

  return (
    <div className="likes">
      <button className="likeButton" onClick={onClick}>
        ❤️
      </button>
      x {likes}
    </div>
  );
};
