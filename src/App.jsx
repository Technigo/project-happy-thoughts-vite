import { Form } from "./components/Form.jsx";
import { ThoughtWrapper } from "./components/ThoughtWrapper.jsx";

export const App = () => {
  return (
    <>
      <h1>Project Happy Thoughts 💭</h1>
      <main>
        <h2>These are our happy thoughts</h2>
        <Form />
        <ThoughtWrapper />
      </main>
    </>
  );
};
