import { useEffect, useState } from "react";
import HappyThoughtForm from "./HappyThoughtForm";

export const App = () => {
  const [happyThoughts, setHappyThoughts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newThought, setNewThought] = useState("");

  const fetchThoughts = () => {
    setLoading(true);
    fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
      .then((response) => response.json())
      .then((response) => setHappyThoughts(response))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchThoughts();
  }, []);

  return (
    <div>
      <HappyThoughtForm />
      {happyThoughts.map((userMessage) => (
        <p key={userMessage._id}>
          {userMessage.message} <span>Likes: {userMessage.hearts}</span>{" "}
          <span>Post Time: {userMessage.createdAt}</span>
        </p>
      ))}
    </div>
  );
};

//how to work with the time//
//const lastPost = (userMessage.createdAt) => {
//return text.slice(11,18);
//console.log (lastPost);
//moment().startOf('hour').fromNow();       // 6 minutes ago
