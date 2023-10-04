
import React, { useState, useEffect } from "react";

import { Header } from "./components/Header.jsx"
//import { Form } from "./components/Form.jsx"
import { Feed } from "./components/Feed.jsx"



export const App = () => {

  const [thoughts, setThoughts] = useState([]);

  const apiThoughts =
    "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";
  useEffect(() => {
    fetch(apiThoughts)
    .then(response => response.json())
    .then(json => setThoughts(json))
  }, [])

  return (
    <div className="app-wrapper">
      <Header />
      <Feed thoughts={thoughts}/>
    </div>);
};
