import React, { useEffect, useState } from "react";
import Form from "./Form";
import Thoughts from "./Thoughts";

export const App = () => {
  const [thoughts, setThoughts] = useState([]);

  // Fetch the data when the component mounts
  useEffect(() => {
    fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Log the fetched data
        setThoughts(data);
      })
      .catch((error) => console.error("Error fetching thoughts:", error));
  }, []);

  return (
    <div>
      <h1>Happy Thoughts</h1>
      {/* Pass setThoughts to Form to allow new thoughts to be added */}
      <Form setThoughts={setThoughts} />
      {/* Pass thoughts and setThoughts to Thoughts to display and like them */}
      <Thoughts thoughts={thoughts} setThoughts={setThoughts} />
    </div>
  );
};

export default App;
