import { useEffect, useState } from "react";
import Form from "./Form";
import Thoughts from "./Thoughts";

export const App = () => {
  const [thoughts, setThoughts] = useState([]);


  useEffect(() => {
    fetch("https://project-happy-thoughts-api-ambk.onrender.com/thoughts",)
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
