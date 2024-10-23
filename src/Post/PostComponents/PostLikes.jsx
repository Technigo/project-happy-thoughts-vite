// PostLikes.jsx

import { useState } from "react";

export const PostLikes = ({ recentThoughtLikes }) => {

  const [newLike, setNewLike] = useState();

  const URL_LIKES = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/THOUGHT_ID/like";

  const buttonClass = recentThoughtLikes > 0 ? 'post-btn liked' : 'post-btn';



  return (
    <div className="post-btn-container">
      <button className={buttonClass}>
        ❤️
      </button>
      <p>x {recentThoughtLikes}</p>
    </div>
  );
};