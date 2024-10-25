// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Form from "./Form";
import Thoughts from "./Thoughts";

export const App = () => {
  const [thoughts, setThoughts] = useState([]);


  useEffect(() => {
    fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setThoughts(data);
      })
      .catch((error) => console.error("Error fetching thoughts:", error));
  }, []);

  return (
    <div>

      {/* Pass setThoughts to Form */}
      <Form setThoughts={setThoughts} />
      <Thoughts thoughts={thoughts} setThoughts={setThoughts} />
    </div>
  );
};

export default App;
