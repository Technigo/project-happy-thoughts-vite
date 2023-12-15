import { useState } from "react";
import { RecentThoughts } from "./components/RecentThoughts/RecentThoughts";
import { CreateThought } from "./components/CreateThought/CreateThought";
import { Header } from "./components/Header/Header";

export const App = () => {
  const [items, setItems] = useState([]);

  return (
    <div className="content-wrapper">
      <Header />
      <CreateThought />
      <RecentThoughts items={items} setItems={setItems} />
    </div>
  );
};
