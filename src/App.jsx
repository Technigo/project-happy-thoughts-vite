import { useState } from "react";
import { RecentThoughts } from "./components/RecentThoughts/RecentThoughts";
import { CreateThought } from "./components/CreateThought/CreateThought";

export const App = () => {
  const [items, setItems] = useState([]);

  return (
    <div>
      <CreateThought />
      <RecentThoughts items={items} setItems={setItems} />
    </div>
  );
};
