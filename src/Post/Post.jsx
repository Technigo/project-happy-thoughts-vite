// Post.jsx

import { PostMessage } from "./PostComponents/PostMessage";
import { PostLikes } from "./PostComponents/PostLikes";
import { PostDate } from "./PostComponents/PostDate";

export const Post = ({ recentThought }) => {
  return (
    <article className="post-card post">
      <PostMessage recentThoughtMessage={recentThought.message} />
      <div className="post-btn-and-date">
        <PostLikes />
        <PostDate recentThoughtDate={recentThought.createdAt} />
      </div>
    </article>
  );
};