import React from "react"
import { Header } from "./components/Header";
import { PostThoughts } from "./components/PostThoughts";
import { Thoughts } from "./components/Thoughts"
import { Footer } from "./components/Footer";

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
