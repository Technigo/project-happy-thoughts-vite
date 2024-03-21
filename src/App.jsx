import { useState } from "react";
import "./App.css";
import { Input } from "./components/Input";
import { Thought } from "./components/Thought";

export const App = () => {
  const [thoughts, setThoughts] = useState([]);

  return (
    <div className="app">
      <Input setThoughts={setThoughts} />{" "}
      <Thought thoughts={thoughts} setThoughts={setThoughts} />
    </div>
  );
};
