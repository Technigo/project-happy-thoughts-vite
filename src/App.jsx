// App.jsx

import { AddPost } from './AddPost/AddPost';
import { Post } from './Post/Post'

export const App = () => {
  return (
    <main>
      <AddPost />
      <div className="post-container">
        <Post />
      </div>
    </main>
  );
};
