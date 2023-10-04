import { useState } from "react";
import { HappyThoughtsFeed } from "./components/HappyThoughtsFeed";
import { WriteAPost } from "./components/writeAPost/WriteAPost";
import { HappyThought } from "./components/happyThought/HappyThought";

export const App = () => {
  const [thought, setThought] = useState([]);

  //The API connection string
  const thoughtAPI = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

  const callAPi = async () => {
    await fetch(thoughtAPI)
      .then((data) => data.json())
      .then((jsonData) =>
        jsonData.map((thought) =>
          // setThought((prevThought) => [...prevThought, thought.message])
          setThought((prevThought) => [...prevThought, thought])
        )
      )
      .catch((error) => console.log(error));
  };

  return (
    <div className="container">
      <h1>Project Happy Thoughts</h1>
      <WriteAPost />
      {/* <HappyThoughtsFeed /> */}
      <button onClick={callAPi}>Click me</button>
      <button
        onClick={() => {
          for (let message of thought) {
            console.log(message);
          }
        }}
      >
        Read Thoughts
      </button>
      <button
        onClick={() => {
          console.log(thought);
        }}
      >
        Read Post
      </button>
      {/* <HappyThought thought={thought[0]} /> */}
    </div>
  );
};
