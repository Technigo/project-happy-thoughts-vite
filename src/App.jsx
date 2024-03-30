import { Feed } from "./Feed";
import { Form } from "./Form";
import { useState } from "react";
import { useEffect } from "react";
export const App = () => {
  // here we are using the useState hook to be able to change the data
  const [posts, setPosts] = useState([]);

  // the useEffect hook allows us to run code once when the component is rendered
  useEffect(() => {
    // here we are fetching the data from the API, code snippet I got from the weather app project and adjusted
    fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
      .then((response) => response.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, []);
  const [message, setMessage] = useState("");

  const onChange = (event) => {
    setMessage(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    // URL from https://github.com/Technigo/project-happy-thoughts-vite/blob/main/instructions.md#create-a-thought
    const url = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });
  };
  
  return (
    <>
      <Form message={message} onChange={onChange} onSubmit={onSubmit} />
      <Feed posts={posts} />
    </>
  );
};
