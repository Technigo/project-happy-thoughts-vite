import { Header } from "./components/Header"
import { ThoughtsForm } from "./components/ThoughtsForm"
import { ThoughtsList } from "./components/ThoughtsList"
import "./app.css"

export const App = () => {
  return (
    <div>
      <Header />
      <ThoughtsForm />
      <ThoughtsList />
    </div>
  )
}