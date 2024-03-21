import { useState, useEffect } from "react";
import { RecentThoughts } from "./RecentThoughts";
import { Form } from "./Form";
import { Like } from "./Like";
import "./ThoughtsContainer.css";

export const ThoughtsContainer = () => {
  const [thoughts, setThoughts] = useState([]);

  useEffect(() => {
    // Fetch thoughts when component mounts
    fetchThoughts();
  }, []);

  //Define RecentThoughts API endpoint
  const apiUrl = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

  const fetchThoughts = () => {
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error fetching thoughts");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setThoughts(data);
      })
      .catch((error) => {
        console.error("Error fetching recent thoughts:", error);
      });
  };

  const addThought = (newThought) => {
    // Add the new thought to the list of thoughts with help of spread-operator(...)
    setThoughts([newThought, ...thoughts]);
  };

  return (
    // render the components passing props
    <div className="thoughts-container">
      <Form addThought={addThought} apiUrl={apiUrl} />
      <RecentThoughts thoughts={thoughts} apiUrl={apiUrl} />
    </div>
  );
};
