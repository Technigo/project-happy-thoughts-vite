import { Header } from "./components/Header";
import { Feed } from "./components/Feed";
import { Form } from "./components/Form";
import { useEffect, useState } from "react";

export const App = () => {
  const [thoughts, setThoughts] = useState([]);

  const apiLatestThoughts =
    "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

  useEffect(() => {
    fetch(apiLatestThoughts)
    .then(response => response.json())
    .then(json => setThoughts(json))
  }, [])

  return (
    <div className="main-wrapper">
      <Header />
      <Form />
      <Feed thoughts={thoughts}/>
    </div>
  );
};
