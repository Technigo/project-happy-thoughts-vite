import { Header } from "./components/Header";
import { ThoughtsList } from "./components/ThoughtsList";

export const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <ThoughtsList />
    </div>
  )
}