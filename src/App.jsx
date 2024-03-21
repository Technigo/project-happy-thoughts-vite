import { useState } from "react";
import "./App.css";
import { Input } from "./components/Input";
import { LikeCount } from "./components/LikeCount";
import { Thought } from "./components/Thought";
import "./components/DisplayThought.css";

export const App = () => {
  const [thoughts, setThoughts] = useState([]);

  return (
    <div className="app">
      <Input setThoughts={setThoughts} />{" "}
      <div className="display-thought">
        <Thought thoughts={thoughts} setThoughts={setThoughts} />
        <LikeCount />
      </div>
    </div>
  );
};
