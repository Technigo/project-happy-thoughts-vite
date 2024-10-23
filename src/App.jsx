// App.jsx

import { useEffect, useState } from 'react';
import { AddPost } from './AddPost/AddPost';
import { Post } from './Post/Post'

export const App = () => {
  const [recentThoughts, setRecentThoughts] = useState([]);
  const [loading, setLoading] = useState(true);

  const URL_THOUGHTS = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

  const fetchRecentThoughts = async () => {
    setLoading(true);
    const response = await fetch(URL_THOUGHTS)
    const data = await response.json()
    setRecentThoughts(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchRecentThoughts();
  }, []);

  return (
    <main>
      <AddPost />

      {loading ? <p>Loading...</p> : (
        <div className="post-container">
          {recentThoughts.map(recentThought => (
            <Post key={recentThought._id} recentThought={recentThought} />
          ))}
        </div>
      )}
    </main>
  );
};
