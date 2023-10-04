import { NewThoughtForm } from "./components/NewThoughtForm";
import { Thoughts } from "./components/Thoughts";
import { Header } from "./components/Header";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <NewThoughtForm />
      <Thoughts />
    </div>
  );
};
