/**
 * App Component
 * 
 * This component serves as the root of the application, combining all major sections:
 * - `Header`: Displays the main title and emoticon of the application.
 * - `HappyWall`: The main content area where users can view, like, and post Happy Thoughts.
 * - `Footer`: Displays the developer's GitHub link and copyright information.
 * 
 */

import { Header } from "./components/Header";
import HappyWall from "./components/HappyWall";
import Footer from "./components/Footer";


export const App = () => {
  return (
    <div>
      <Header />
      <HappyWall />
      <Footer />
    </div>
    )
}
