
import { useState, useEffect } from 'react'

const BASE_URL = "https:happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

export const App = () => {
  const [happyThought, setHappyThought] = useState([]);

  useEffect(() => {
    const fetchHappyThought = async () => {
      try {
        const response = await fetch(BASE_URL);
        const data = await response.json();
        const message = data.map(thought => thought.message);
        setHappyThought(message);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchHappyThought();
  }, []);



  return (
    <div>
      <ul>
        {happyThought.length > 0
          ? happyThought.map((message, index) => (
            <li key={index}>{message}</li>
          ))
          : "Loading..."}
      </ul>
    </div>
  );
};

