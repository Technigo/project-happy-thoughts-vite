import { useState, useEffect } from "react";
import { HappyThoughts } from "./components/Thoughts";

export const App = () => {
  const [thoughts, setThoughts] = useState([]);

  useEffect(() => {
    fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
      .then((res) => res.json())
      .then((json) => {
        setThoughts(json);
        console.log(json);
      });
  }, []);

  useEffect(() => {
    console.log("Testing", thoughts);
  }, [thoughts]);

  return (
    <div>
      <HappyThoughts thought={thoughts} />
    </div>
  );
};
