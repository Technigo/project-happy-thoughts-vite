import { useState, useEffect } from "react";
import "./Thought.css";

export const Thought = () => {
  const [thoughts, setThoughts] = useState([]);

  const URL = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

  const fetchThoughts = async () => {
    fetch(URL)
      .then((result) => {
        if (!result.ok) {
          throw new Error("Network is bad. Please reload the Page.");
        }
        return result.json();
      })
      .then((data) => {
        setThoughts(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching the data:", error);
      });
  };

  useEffect(() => {
    fetchThoughts();
  }, []);

  return (
    <div className="thoughts-box">
      {thoughts.length > 0 ? (
        <ul>
          {thoughts.map((thought, index) => (
            <li className="thought" key={index}>
              {thought.message}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading . . . </p>
      )}
    </div>
  );
};
