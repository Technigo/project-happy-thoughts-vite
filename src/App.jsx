import React, { useState, useEffect }from "react"
import { Header } from "./components/header/Header";
import { PostThoughts } from "./components/postThoughts/PostThoughts";
import { Thoughts } from "./components/thoughts/Thoughts"
import { Footer } from "./components/footer/Footer";
import { URL } from "./components/ApiUrl";

export const App = () => {
  const [thoughts, setThoughts] = useState([]);

  // Fetch thoughts when the app loads
  useEffect(() => {
    const fetchThoughts = async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setThoughts(data);
      } catch (error) {
        console.error("Error fetching thoughts:", error);
      }
    };
    fetchThoughts();
  }, []);


  return (
    <div>
      <Header />
      <PostThoughts thoughts={thoughts} setThoughts={setThoughts} />
      <Thoughts thoughts={thoughts} setThoughts={setThoughts} />
      <Footer />
    </div>
  );
};
