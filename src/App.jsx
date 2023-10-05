
import React, { useState, useEffect } from "react";

import { Header } from "./components/Header.jsx"
import { Form } from "./components/Form.jsx"
import { Feed } from "./components/Feed.jsx"



export const App = () => {

  const [loading, setLoading] =useState(false);

  const [thoughtsList, setThoughtsList] = useState([]);

  const ThoughtsApi = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

  const fetchThoughts = () => {
    setLoading(true);

    fetch(ThoughtsApi)
    .then(response => response.json())
    .then(json => setThoughtsList(json))
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchThoughts();
  }, []);

  const addNewPost = (newThought) => {
    setThoughtsList([newThought, ...thoughtsList])
  }
  

  return (
    <div className="screen">
      <div className="app-wrapper">
        <Header />
        <Form newMessage={addNewPost} fetchThoughts={fetchThoughts}/>
        <Feed 
            thoughtsList={thoughtsList}
            setThoughtsList={setThoughtsList}
            />
      </div>
    </div>);
};
