import "./app.css"
import { useState, useEffect } from "react";

import { Header } from "./components/Header"
import { NewThought } from "./components/NewThought";
import { Thoughts } from "./components/Thoughts";
import { Footer } from "./components/Footer"

export const App = () => {
  
  useEffect(() => {
    console.log("newthought mount")
  });

  
  return (
    <div className="APP">
      <Header />
      <NewThought />
      <Thoughts />     
      <Footer />
    </div>
  );
};
