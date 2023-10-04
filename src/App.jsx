import { HappyThoughtsFeed } from "./components/HappyThoughtsFeed";
import { HappyThought } from "./components/happyThought/HappyThought";
import { WriteAPost } from "./components/writeAPost/WriteAPost";

export const App = () => {
  return (
    <div className="container">
      <h1>Project Happy Thoughts</h1>
      <WriteAPost />
      <HappyThoughtsFeed />
      <HappyThought />
    </div>
  );
};
