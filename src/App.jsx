import { useEffect, useState } from "react";
import NewThoughtForm from "./NewThoughtForm";
import HappyThought from "./HappyThought";

const API_URL = "https://project-happy-thoughts-api-3unj.onrender.com";

export const App = () => {
  const [happyThoughts, setHappyThoughts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchThoughts();
  }, []);

  const fetchThoughts = () => {
    setLoading(true);
    fetch(`${API_URL}/thoughts`)
      .then((response) => response.json())
      .then((response) => setHappyThoughts(response))
      .finally(() => setLoading(false));
  };

  const onNewThought = (newThought) => {
    setHappyThoughts([newThought, ...happyThoughts]);
  };

  const onLike = (likedThought) => {
    setHappyThoughts(
      happyThoughts.map((happyThought) => {
        if (happyThought._id === likedThought._id) {
          return { ...happyThought, hearts: happyThought.hearts + 1 };
        } else {
          return happyThought;
        }
      })
    );
  };

  return loading ? (
    <img src="./Animation.gif" />
  ) : (
    <>
      <h1> Delighted thoughts </h1>
      <NewThoughtForm onNewThought={onNewThought} />
      {happyThoughts.map((userMessage) => (
        <HappyThought
          onLike={onLike}
          key={userMessage._id}
          userMessage={userMessage}
        />
      ))}
    </>
  );
};
