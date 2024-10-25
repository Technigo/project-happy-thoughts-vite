import React from "react"
import { Header } from "./components/Header";
import { Text } from "./components/SendThoughts";
import { Thoughts } from "./components/Thoughts"
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <div>
      <Header />
      <Text />
      <Thoughts />
      <Footer />
    
    
    </div>
  );
};
