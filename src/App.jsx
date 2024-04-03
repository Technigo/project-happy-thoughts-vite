import { Header } from "./components/Header";
import { ThoughtsForm } from "./components/ThoughtsForm";
import { ThoughtsList } from "./components/ThoughtsList";

export const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <ThoughtsForm />
      <ThoughtsList />
    </div>
  )
}