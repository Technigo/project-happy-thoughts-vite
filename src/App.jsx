import { Header } from "./Components/Header/Header";
import { PostThought } from "./Components/PostThought/PostThought";
import { ThoughtCard } from "./Components/Thoughts/ThoughtCard";
import "./app.css"

// Decalring a variable for the API-URL
const apiUrl = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

export const App = () => {
  return (
    <section className="app-section-wrapper">
      <Header />
      <PostThought apiUrl={apiUrl} />
      <ThoughtCard apiUrl={apiUrl} />
    </section >
  );
};
