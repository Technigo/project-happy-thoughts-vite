import { useEffect, useState } from "react";
import ThoughtItem from "./ThoughtItem";

const ThoughtList = () => {
  const [thoughts, setThoughts] = useState([]);

  useEffect(() => {
    fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setThoughts(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="thought-list">
      {thoughts.map((thought) => (
        <ThoughtItem key={thought._id} thought={thought} />
      ))}
    </div>
  );
};

export default ThoughtList;
