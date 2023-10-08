import { useState } from "react";
import { Header } from "./Components/Header";
import { ThoughtList } from "./Components/ThoughtList";

export const App = () => {
  const [thoughts, setThoughts] = useState([]);

  const handleNewThought = (newThought) => {
    setThoughts([newThought, ...thoughts]);
  };

  const handleLike = (thoughtId) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [thoughtId]: (prevLikes[thoughtId] || 0) + 1,
    }));
  };

  return (
    <div>
      <Header />
      {/* <UserInput newThoughtPosted={handleNewThought} /> */}
      <ThoughtList thoughts={thoughts} updateLike={handleLike} />
    </div>
  );
};

export default App;
