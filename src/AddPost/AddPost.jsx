// AddPost.jsx

import { PostForm } from "./AddPostComponents/PostForm";

export const AddPost = () => {
  return (
    <div className="post-card add-post">
      <h1>What's making you happy right now?</h1>
      <PostForm />
    </div>
  );
};