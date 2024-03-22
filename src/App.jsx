import { Header } from "./assets/components/Header.jsx";
import { ThoughtFeed } from "./assets/components/ThoughtFeed.jsx";
import { CreateThought } from "./assets/components/CreateThought.jsx";

export const App = () => {
  return (
    <div>
      <Header />
      <CreateThought />
      <ThoughtFeed />
    </div>
  );
};
