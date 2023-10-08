import { useEffect, useState } from "react";
import { HappyThoughtsFeed } from "./components/happyThoughtsFeed/HappyThoughtsFeed";
import { WriteAPost } from "./components/writeAPost/WriteAPost";
import { HappyThought } from "./components/happyThought/HappyThought";

export const App = () => {
  const [thoughtCollection, setThoughtCollection] = useState([]);

  // A state that tracks the total amount of likes during a session
  const [likeCounter, setLikeCounter] = useState(0);

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

  const addNewPost = (newPost) => {
    setThoughtCollection([newPost, ...thoughtCollection]);
  };

  return (
    <div className="container">
      <h1>Project Happy Thoughts</h1>
      <h3>
        The amount of posts you've liked so far this session is: {likeCounter}
      </h3>
      <WriteAPost addNewPost={addNewPost} />
      <HappyThoughtsFeed
        thoughts={thoughtCollection}
        setLikeCounter={setLikeCounter}
      />
    </div>
  );
};
