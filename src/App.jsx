/**
 * Import ThoughtContent and Header components
 */
import "./App.scss";
import { Header } from "./Header";
import { ThoughtContent } from "./components/ThoughtContent/ThoughtContent";

export const App = () => {
  return (
    <div className="main-wrapper">
      <Header />
      <ThoughtContent />
    </div>
  );
};
