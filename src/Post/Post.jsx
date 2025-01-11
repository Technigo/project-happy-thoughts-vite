// Post.jsx

import { PostMessage } from "./PostComponents/PostMessage";
import { PostLikes } from "./PostComponents/PostLikes";
import { PostDate } from "./PostComponents/PostDate";

export const Post = ({ recentThought }) => {
  return (
    <article className="post-card-post">
      {/* Recent thought message from the API is sent as a prop to PostMessage */}
      <PostMessage recentThoughtMessage={recentThought.message} />

      <div className="post-btn-and-date">
        {/* Number of hearts in the API on each thought, and the ID of each thought is sent as a prop to PostLikes */}
        <PostLikes recentThoughtLikes={recentThought.hearts} thoughtId={recentThought._id} />

        {/* Recent thought created date from the API is sent as a prop to PostDate */}
        <PostDate recentThoughtDate={recentThought.createdAt} />
      </div>
    </article>
  );
};