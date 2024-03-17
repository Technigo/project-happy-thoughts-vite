import { useEffect } from "react";
import { useState } from "react";
import { Thought } from "./Thought";

export const ThoughtWrapper = () => {
  const [thoughts, setThoughts] = useState([]);

  const API_ENDPOINT =
    "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";
  const METHOD = "GET";

  useEffect(() => {
    const fetchThoughts = async () => {
      try {
        const response = await fetch(API_ENDPOINT, { method: METHOD });
        if (!response.ok) {
          throw new Error("Error fetching data");
        }
        const data = await response.json();
        console.log(data);
        setThoughts(data);
      } catch (error) {
        throw new Error("Error", error);
      }
    };

    fetchThoughts();
  }, []);

  return (
    <section className="thought-wrapper">
      <h3>Thought Wrapper</h3>
      {thoughts.map(thought => {
        return <Thought
          key={thought._id}
          thought={thought}
        />;
      })}
    </section>
  );
};
