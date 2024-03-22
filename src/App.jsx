import { useState } from "react";
import "./App.css";
import { Input } from "./components/Input";
import { ThoughtRender } from "./components/ThoughtRender";
import { ThoughtBox } from "./components/ThoughtBox";
//import { Thought } from "./components/Thought";

export const App = () => {
  const [thoughts, setThoughts] = useState([]);

  return (
    <div className="app">
      <Input setThoughts={setThoughts} />
      <ThoughtRender setThoughts={setThoughts} />
      <ThoughtBox thoughts={thoughts} setThoughts={setThoughts} />
    </div>
  );
};

//<Thought thoughts={thoughts} setThoughts={setThoughts} />
