// App.jsx

import { useEffect, useState } from "react";
import { AddPost } from "./AddPost/AddPost";
import { Post } from "./Post/Post";
import "./App.css";

export const App = () => {
  // Hooks
  const [recentThoughts, setRecentThoughts] = useState([]);
  const [loading, setLoading] = useState(true);
  // URL for GET and POST thoughts to API
  const URL_THOUGHTS = "https://project-happy-thoughts-api-ek.onrender.com/thoughts";
  // OLD API
  // const URL_THOUGHTS = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

  // Function to fetch recent thoughts
  const fetchRecentThoughts = async () => {
    setLoading(true); // Show Loading message
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
      setLoading(false); // Do not show loading message
    }
  };

  // useEffect hook and call for fetchRecentThought function. ending with empty array to only make the API call once.
  useEffect(() => {
    fetchRecentThoughts();
  }, []);

  // Function that adds a new thought
  const addNewThought = (newThought) => {
    setRecentThoughts([newThought, ...recentThoughts]); // Update UI in the web browser before API, to make it more user firendly
  };

  return (
    // Send addNewThought function as a prop to AddPost
    <main>
      <div className="add-post-container">
        <AddPost addNewThought={addNewThought} url={URL_THOUGHTS} />
      </div>

      {/* If thoughts are loading, show loading message */}
      {loading ?
        <div className="post-container">
          <p>Loading...</p>
        </div>
        : (
          // otherwise show recent thoughts
          <div className="post-container">
            {recentThoughts.map(recentThought => (
              <Post key={recentThought._id} recentThought={recentThought} />
            ))}
          </div>
        )}
    </main>
  );
};