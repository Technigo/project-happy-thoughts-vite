import { useState, useEffect } from "react";

export const MessageList = () => {
  const [messageData, setMessageData] = useState([]);
  const fetchData = () => {
    fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
      .then((response) => response.json())
      .then((json) => setMessageData(json));
  };

  useEffect(() => fetchData(), []);

  return (
    <section>
      {messageData.map((thought) => (
        <div key={thought._id}>
          <p>{thought.message}</p>
          <p>Hearts: {thought.hearts}</p>
        </div>
      ))}
    </section>
  );
};
