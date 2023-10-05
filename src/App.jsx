import { SendThought } from "./components/SendThought/SendThought.jsx"
import { PostedThoughts } from "./components/PostedThoughts/PostedThoughts.jsx"
import { Footer } from "./components/Footer/Footer.jsx"

// Define the App component
export const App = () => {
  return (
  <div className="main-wrapper">
    <h1>Project Happy Thoughts</h1>
    <h2>Web Development Boot Camp by Technigo</h2>
    <SendThought />
    <PostedThoughts />
    <Footer />
  </div>
  )
}
