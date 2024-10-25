import "./app.css"
import { useState, useEffect } from "react";

import { Header } from "./components/Header"
import { NewThought } from "./components/NewThought";
import { Thoughts } from "./components/Thoughts";
import { Footer } from "./components/Footer"

export const App = () => {
  const [thoughts, setThoughts] = useState([]);

  const URL = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

  const fetchData = async () => {
    try {
      const res = await fetch(URL);

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.json();
      setThoughts(data);

    } catch (error) {
      console.log("Error is ", error);
    }
  }
  
  useEffect(() => {
    fetchData()
  }, []);

  
  return (
    <div className="APP">
      <Header />
      <NewThought setThoughts={setThoughts} thoughts={thoughts} />
      <Thoughts thoughts={thoughts} fetchData={fetchData} />     
      <Footer />
    </div>
  );
};
