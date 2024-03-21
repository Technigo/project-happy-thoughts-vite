import { useState, useEffect } from "react";
import { Thought } from "./components/Thought";
import { Form } from "./components/Form";

export const App = () => {
  const [thoughts, setThoughts] = useState();
  const [fetched, setFetched] = useState(false);
  const Thoughts_URL =
    "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

  useEffect(() => {
    fetch(Thoughts_URL)
      .then((result) => result.json())
      .then((json) => {
        setThoughts(json);
        setFetched(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [thoughts]);

  return (
    <div className="App">
      <h1>Happy Thoughts App</h1>
      <Form
        setThoughts={setThoughts}
        thoughts_URL={Thoughts_URL}
        setFetched={setFetched}
      />
      {fetched && fetched ? <Thought thoughts={thoughts} /> : "Loading..."}
    </div>
  );
};
