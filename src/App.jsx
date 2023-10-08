// eslint-disable-next-line no-unused-vars
import React from "react";
import  HappyThoughts  from "./Compontents/Happythoughts"
import { Header } from "./Compontents/Header";
import { Footer } from "./Compontents/Footer";

export const App = () => {
  return (
    <div>
      <Header />
      <HappyThoughts />
      <Footer />
    </div>
  );
};
