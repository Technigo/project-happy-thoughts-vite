import { useEffect, useState } from "react";
import NewThoughtForm from "./NewThoughtForm";
import HappyThought from "./HappyThought";

export const App = () => {
  const [happyThoughts, setHappyThoughts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchThoughts();
  }, []);

  const fetchThoughts = () => {
    setLoading(true);
    fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
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
    //we need to update the thought that we liked
  };

  return (
    <div>
      <NewThoughtForm onNewThought={onNewThought} />
      {happyThoughts.map((userMessage) => (
        <HappyThought
          onLike={onLike}
          key={userMessage._id}
          userMessage={userMessage}
        />
      ))}
    </div>
  );
};

//how to work with the time//
//const lastPost = (userMessage.createdAt) => {
//return text.slice(11,18);
//console.log (lastPost);
//moment().startOf('hour').fromNow();       // 6 minutes ago
