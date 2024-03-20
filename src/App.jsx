import "./App.css";
import { Input } from "./components/Input";
import { Thought } from "./components/Thought";

export const App = () => {
  return (
    <div className="app">
      <Input />
      <Thought />
    </div>
  );
};
