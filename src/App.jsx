import React, {useState, useEffect} from "react";
import { Form } from "./components/Form/Form";
import { Thoughts } from "./components/Thoughts/Thoughts";
import { Header } from "./components/Header/Header";

const API = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

export const App = () => {
  const [thought, setThought] = useState([]);

  return (
  <section className="body-wrapper">
    <Header />
    <Form />
    <Thoughts thought={thought} setThought={setThought} />
    </section>
  );
};
