import { useState, useEffect } from "react";
const apiUrl = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

export const Feed = () => {
  //create variable to store fetched data (thoughts)
  const [thoughts, setThoughts] = useState([]);

  //useEffect runs the getThoughts function after the component mounts
  useEffect(() => {
    const getThoughts = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setThoughts(data);
      } catch (error) {
        console.error("Something happend, please try again!");
      }
    };
    getThoughts();
  }, []); // empty arry: runs only on first render

  //maps over the toughts array and creates a card for each thought
  return (
    <section className="feedContainer">
      {thoughts.map((thought, index) => (
        <div className="cardContainer" key={index}>
          <p>{thought.message}</p>
          <p>insert heart image</p> <p>{thought.hearts}</p>
          <p>{thought.createdAt}</p>
        </div>
      ))}
    </section>
  );
};
