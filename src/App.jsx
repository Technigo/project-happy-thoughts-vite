import { HappyThoughts } from "./components/HappyThoughts";
import { HappyThoughtsHeader } from "./components/Header";

export const App = () => {
  return (
    <>
      <HappyThoughtsHeader />
      <HappyThoughts />
    </>
  );
};