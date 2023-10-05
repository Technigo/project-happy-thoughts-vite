import { Header } from "./components/header/Header";
import { PostThought } from "./components/PostThought/PostThoughts";
import { ThoughtCard } from "./components/PostThought/PostThoughts";
import "./app.css"


//api url
const API = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";






export const App = () => {
  return (
    <section className="app-wrapper">
      <Header />
      <PostThought API={API} />
      <ThoughtCard API={API} />
    </section>
  );
};
