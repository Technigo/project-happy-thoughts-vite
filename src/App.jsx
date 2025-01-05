import React, { useState } from "react";
import { HappyThoughtBox } from "./components/HappyThoughtBox";
import { UpdateFeedBox } from "./components/UpdateFeedBox";

export const App = () => {
  const [happyThoughtFeed, setHappyThoughtFeed] = useState([]);
  const [refreshTrigger, setRefreshTrigger] = useState(false);

  //Callback for new thought
  const addNewThought = (newThought) => {
    setHappyThoughtFeed((prevFeed) => [newThought, ...prevFeed]);
    setRefreshTrigger((prev) => !prev);
  };
  
  return (
    <section className="hp-container">
      <UpdateFeedBox onNewThought={addNewThought} />
      <HappyThoughtBox 
        happyThoughtFeed={happyThoughtFeed} 
        setHappyThoughtFeed={setHappyThoughtFeed}
        refreshTrigger={refreshTrigger} 
      />
    </section>
  );
};
