// Post.jsx

import { PostMessage } from "./PostComponents/PostMessage";
import { PostLikes } from "./PostComponents/PostLikes";
import { PostDate } from "./PostComponents/PostDate";

export const Post = () => {
  return (
    <article className="post-card post">
      <PostMessage />
      <div className="post-btn-and-date">
        <PostLikes />
        <PostDate />
      </div>
    </article>
  );
};