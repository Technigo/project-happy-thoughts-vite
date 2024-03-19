import { useEffect, useState } from "react";

export const App = () => {
  const [happyThoughts, setHappyThoughts] = useState([]);

  useEffect(() => {
    fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
      .then((response) => response.json())
      .then((response) => setHappyThoughts(response));
  }, []);

  return (
    <div>
      {happyThoughts.map((userMessage) => (
        <p key={userMessage._id}>
          {userMessage.message} <span>Likes: {userMessage.hearts}</span>
        </p>
      ))}
    </div>
  );
};
