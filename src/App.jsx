import { useState } from "react";
import "./App.css";
import { Input } from "./components/Input";
import { ThoughtRender } from "./components/ThoughtRender";
import { ThoughtBox } from "./components/ThoughtBox";
import { Header } from "./components/Header";

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [loading, setLoading] = useState(true);

  return (
    <div className="app">
      <Header />
      <Input setThoughts={setThoughts} />
      <ThoughtRender
        setThoughts={setThoughts}
        loading={loading}
        setLoading={setLoading}
      />
      <ThoughtBox thoughts={thoughts} setThoughts={setThoughts} />
    </div>
  );
};
