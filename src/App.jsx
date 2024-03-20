import { useState, useEffect } from "react";
import { Fetch } from "./components/Fetch";

export const App = () => {
  const [fetchThought, setFetchThought] = useState([]);

  useEffect(() => {
    fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
      .then((res) => res.json())
      .then((json) => {
        setFetchThought();
        // console.log(json)
      });
  }, []);

  useEffect(() => {}, [fetchThought]);

  return (
    <div>
      <Fetch />
      <h1>Happy Thoughts</h1>
    </div>
  );
};
