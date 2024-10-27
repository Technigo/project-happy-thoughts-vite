import { useEffect, useState } from "react";
import "./App.css";
import { Thought } from "./components/Thought";
import { InputForm } from "./components/InputForm";
import { fetchData, URL } from "./utils/api";

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [likedThoughts, setLikedThoughts] = useState([]);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData().then((data) => setThoughts(data));
  }, []);

  const handleHeartClick = async (id) => {
    try {
      const res = await fetch(`${URL}/${id}/like`, {
        method: "POST",
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const updatedThought = await res.json();

      // Update thoughts with new heart count from server
      setThoughts((prevThoughts) =>
        prevThoughts.map((thought) =>
          thought._id === id
            ? { ...thought, hearts: updatedThought.hearts }
            : thought
        )
      );

      // Is not already liked, dd to likedThoughts array
      setLikedThoughts((prev) =>
        prev.includes(id)
          ? prev.filter((thoughtId) => thoughtId !== id)
          : [...prev, id]
      );
    } catch (error) {
      console.error("Error liking thought:", error);
    }
  };

  return (
    thoughts && (
      <>
        <InputForm
          setMessage={setMessage}
          message={message}
          setThoughts={setThoughts}
        />
        <Thought
          thoughts={thoughts}
          handleHeartClick={handleHeartClick}
          likedThoughts={likedThoughts}
        />
      </>
    )
  );
};
