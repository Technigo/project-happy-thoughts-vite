import React, {useState} from "react";
import { CreateThought } from "./components/CreateThought/CreateThought";
import { RecentThoughts } from "./components/RecentThoughts/RecentThoughts";
import { Header } from "./components/Header/Header";

export const App = () => {
  const [items, setItems] = useState([]);
  
  return (
  <section className="body-wrapper">
    <Header />
    <CreateThought />
    <RecentThoughts items={items} setItems={setItems} />
    </section>
  );
};
