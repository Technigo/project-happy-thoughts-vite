import { useState, useEffect } from "react";
import { Form } from "./Form";
import { Like } from "./Like";
import { RecentThoughts } from "./RecentThoughts";
import "./ThoughtsContainer.css";

export const ThoughtsContainer = () => {
  const [thoughts, setThoughts] = useState([]);

  useEffect(() => {
    // Fetch thoughts when component mounts
    fetchThoughts();
  }, []);

  //Define RecentThoughts API endpoint
  const API_URL = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

  const fetchThoughts = () => {
    fetch(API_URL)
      .then((response) => response.json())
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
    <div className="thought-container">
      <Form addThought={addThought} />
      <RecentThoughts thoughts={thoughts} />
      <Like />
    </div>
  );
};
