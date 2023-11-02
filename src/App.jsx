import { useState } from "react";
import { Header } from "./Header/Header";
import { CreateThought } from "./CreateThought/CreateThought";
import { RecentThoughts } from "./RecentThoughts/RecentThoughts";

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
