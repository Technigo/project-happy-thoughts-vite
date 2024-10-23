// App.jsx
import { useEffect, useState } from 'react';
import { AddPost } from './AddPost/AddPost';
import { Post } from './Post/Post'

export const App = () => {
  const URL_RECENT_THOUGHTS = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";
  const [recentThoughts, setRecentThoughts] = useState([]);

  const fetchRecentThoughts = () => {
    fetch(URL_RECENT_THOUGHTS)
      .then(response => response.json())
      .then(json => setRecentThoughts(json));
  };

  useEffect(() => {
    fetchRecentThoughts();
  }, []);

  return (
    <main>
      <AddPost />
      <div className="post-container">
        {recentThoughts.map(recentThought => (
          <Post key={recentThought._id} recentThought={recentThought} />
        ))}

      </div>
    </main>
  );
};
