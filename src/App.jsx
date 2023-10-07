import { useState } from "react";
import { Header } from "./Components/Header";
import { ThoughtList } from "./Components/ThoughtList";
import { UserInput } from "./Components/UserInput";

export const App = () => {
  const [thoughts, setThoughts] = useState([]);

  // Create a function when new input is posted

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
    <div className="container">
      <Header />
      {/* <UserInput newThoughtPosted={handleNewThought} /> */}
      <ThoughtList thoughts={thoughts} updateLike={handleLike} />
    </div>
  );
};

export default App;
