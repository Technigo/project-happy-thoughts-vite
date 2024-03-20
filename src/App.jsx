import { ThoughtForm } from "./components/ThoughtForm.jsx";
import "./index.css";

export const App = () => {
  return (
    <div>
      <header className="header">
        <h1>HAPPY THOUGHTS HUB 🌞</h1>
      </header>
      <ThoughtForm />
    </div>
  );
};
