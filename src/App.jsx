import React, { useCallback, useState } from 'react';
import ThoughtsList from './components/ThoughtsList';
import { PostThought } from './components/PostThought';
import './App.css';

export const App = () => {
  const [refreshThoughts, setRefreshThoughts] = useState(false);

  const triggerRefresh = useCallback(() => {
    setRefreshThoughts((prev) => !prev);
  }, []);

  return (
    <div className='main-wrapper'>    
      <h1>Project Happy Thoughts</h1>
      <h2>Testing</h2>
      <PostThought onNewThought={triggerRefresh} />
      <ThoughtsList refreshKey={refreshThoughts} />
    </div>
  );
};
