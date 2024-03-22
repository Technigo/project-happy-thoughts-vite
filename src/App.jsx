import { Header } from "./assets/components/Header/Header.jsx";
import { ThoughtFeed } from "./assets/components/ThoughtFeed/ThoughtFeed.jsx";
import { CreateThought } from "./assets/components/CreateThought/CreateThought.jsx";

export const App = () => {
  return (
    <div>
      <Header />
      <CreateThought />
      <ThoughtFeed />
    </div>
  );
};
