import React, { useCallback, useState } from 'react';
import ThoughtsList from './components/ThoughtsList';
import { PostThought } from './components/PostThought';
import './App.css';

export const App = () => {
  // Update the thought list
  const [refreshThoughts, setRefreshThoughts] = useState(false);

  const triggerRefresh = useCallback(() => {
    setRefreshThoughts((prev) => !prev);
  }, []);

  return (
    <div className='main-wrapper'>    
      <h1>Project Happy Thoughts</h1>
      <h2>MJ</h2>

      {/* Box to write and send thoughts */}
      <PostThought onNewThought={triggerRefresh} />

      {/* List of thoughts */}
      <ThoughtsList refreshKey={refreshThoughts} />
    </div>
  );
};
