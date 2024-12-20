// Parent component, this component is taking care of fetching the data, and render the child componets
import { useState, useEffect } from "react";
import { DisplayThoughts } from "./DisplayThought";
import { PostThought } from "./PostThought";

export const ThoughtPage = () => {
  const BASE_URL = "https://project-happy-thoughts-api-vhov.onrender.com/thoughts";
  //"https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";
  const LIKE_URL = "https://project-happy-thoughts-api-vhov.onrender.com/thoughts/THOUGHT_ID/like";
  //"https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/THOUGHT_ID/like";

  //state for fetching
  const [happyThoughts, setHappyThoughts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //Fetching the data from the API
  useEffect(() => {
    const fetchHappyThoughts = async () => {
      try {
        const response = await fetch(BASE_URL);
        const data = await response.json();
        setHappyThoughts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchHappyThoughts();
  }, []);

  //POSTCALL for API
  const postHappyThought = async (thought) => {
    try {
      const response = await fetch(BASE_URL, {
        method: "POST",
        body: JSON.stringify({
          message: thought,
        }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      const newThought = data;
      setHappyThoughts((previousThoughts) => [newThought, ...previousThoughts]);

    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  //postcall for likes on thoughts -> updated to PATCH 
  const postLike = async (thoughtId) => {
    try {
      const response = await fetch(LIKE_URL.replace("THOUGHT_ID", thoughtId), {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      const updatedThoughts = happyThoughts.map(thought =>
        thought._id === thoughtId ? { ...thought, hearts: data.hearts } : thought
      );
      setHappyThoughts(updatedThoughts);
    } catch (error) {
      console.error("Error posting like:", error);
    }
  };
  // const postLike = async (thoughtId) => {
  //   try {
  //     const response = await fetch(LIKE_URL.replace("THOUGHT_ID", thoughtId), {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //     });
  //     const data = await response.json();
  //     const existingThoughts = [...happyThoughts];
  //     const existingThought = existingThoughts.find(
  //       thought => thought._id === thoughtId
  //     );
  //     existingThought.hearts = data.hearts;
  //     setHappyThoughts(existingThoughts);
  //   } catch (error) {
  //     console.error("Error posting data:", error);
  //   }
  // };

  return (
    <>
      <PostThought postHappyThought={postHappyThought} />
      <DisplayThoughts happyThoughts={happyThoughts} isLoading={isLoading} postLike={postLike} />
    </>
  );
};