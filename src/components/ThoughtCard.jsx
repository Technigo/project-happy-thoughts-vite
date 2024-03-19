import { useState, useEffect } from "react";
import { Message } from "./Message";

export const ThoughtCard = () => {
  const [thoughts, setThoughts] = useState(null);

  const url = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

  const fetchData = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setThoughts(data))
      .catch((error) => console.error("Error fetching data: ", error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div>{thoughts && <Message messages={thoughts} />}</div>;
};

/*   const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      if (data && data.message) {
        setThoughts(data.message);
      }
    } catch (error) {
      console.error("Error fetching data", error);
    }
  }; */
