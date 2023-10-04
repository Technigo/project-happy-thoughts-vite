import { useEffect, useState } from "react";
import { HappyThoughtsFeed } from "./components/happyThoughtsFeed/HappyThoughtsFeed";
import { WriteAPost } from "./components/writeAPost/WriteAPost";
import { HappyThought } from "./components/happyThought/HappyThought";

export const App = () => {
  const [thoughtCollection, setThoughtCollection] = useState([]);

  //The API connection string
  const thoughtAPI = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

  const callAPi = async () => {
    await fetch(thoughtAPI)
      .then((data) => data.json())
      .then((jsonData) => setThoughtCollection(jsonData))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    callAPi();
  }, []);

  return (
    <div className="container">
      <h1>Project Happy Thoughts</h1>
      <WriteAPost />
      <HappyThoughtsFeed thoughts={thoughtCollection} />
    </div>
  );
};
