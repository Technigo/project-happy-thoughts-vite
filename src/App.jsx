import React from "react"
import { Header } from "./components/header/Header";
import { PostThoughts } from "./components/postThoughts/PostThoughts";
import { Thoughts } from "./components/thoughts/Thoughts"
import { Footer } from "./components/footer/Footer";

export const App = () => {
  return (
    <div>
      <Header />
      <PostThoughts />
      <Thoughts />
      <Footer />
    </div>
  );
};
