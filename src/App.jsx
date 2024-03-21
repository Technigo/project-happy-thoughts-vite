import { useEffect, useState } from "react";
import { Form } from "./components/Form.jsx";
import { ThoughtWrapper } from "./components/ThoughtWrapper.jsx";

export const App = () => {
  const [newThought, setNewThought] = useState("");
  useEffect(() => {console.log(newThought)}, [newThought]);

  return (
    <>
      <h1>Project Happy Thoughts 💭</h1>
      <main>
        <h2>These are our happy thoughts</h2>
        <Form
          newThought={newThought}
          setNewThought={setNewThought}
        />
        <ThoughtWrapper newThought={newThought} />
      </main>
    </>
  );
};
