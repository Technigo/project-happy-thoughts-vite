import clsx from "clsx";
import { useState } from "react";

export const Likes = (props) => {
  const [likes, setLikes] = useState(props.hearts);
  // here we make the function to make the heart (button) clickable
  const onClick = () => {
    // this is the URL to like a post
    // testing if the like button work, it should be status 200. 200 is good. 400 is bad (404)
    const url = `http://localhost:8080/thoughts/${props.id}/like`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: "",
    });
    setLikes(likes + 1);
  };

  return (
    <div className="likes">
      <button
        // clsx is to make the button pink when its been liked. clsx let us add classes when there is a special condition. https://github.com/lukeed/clsx 
        className={clsx("likeButton", { likeButtonWithLikes: likes > 0 })}
        onClick={onClick}
      >
        ❤️
      </button>
      x {likes}
    </div>
  );
};
