import { useState } from "react";
import {Header} from "./components/Header.jsx"
import { Form } from "./components/Form.jsx";
import { ThoughtWrapper } from "./components/ThoughtWrapper.jsx";

export const App = () => {
  const [newThought, setNewThought] = useState("");

  return (
    <>
      <Header />
      <main>
        <Form
          newThought={newThought}
          setNewThought={setNewThought}
        />
        <ThoughtWrapper newThought={newThought} />
      </main>
    </>
  );
};
