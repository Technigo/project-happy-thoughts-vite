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
    try {
      const response = await fetch(URL_THOUGHTS);
      if (response.ok) {
        const data = await response.json();
        setRecentThoughts(data);
      } else {
        console.error("Failed to fetch thoughts");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecentThoughts();
  }, []);

  // Funktion som lägger till en ny tanke
  const addNewThought = (newThought) => {
    setRecentThoughts([newThought, ...recentThoughts]); // Optimistisk UI-uppdatering
  };

  return (
    <main>
      <AddPost addNewThought={addNewThought} url={URL_THOUGHTS} />

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
