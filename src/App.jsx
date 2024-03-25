import { useEffect, useState } from "react";
import Header from "./components/Header";
import Feed from "./components/Feed";
import Footer from "./components/Footer";

const App = () => {
  const [thoughts, setThoughts] = useState([]);

  useEffect(() => {
    fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
      .then((response) => response.json())
      .then((data) => setThoughts(data))
      .catch((error) => console.error(error));
  }, []);

  const addThought = (newThought) => {
    setThoughts((prevThoughts) => [newThought, ...prevThoughts]);
  };

  return (
    <div>
      <Header />
      <Feed thoughts={thoughts} addThought={addThought} />
      <Footer />
    </div>
  );
};

export default App;