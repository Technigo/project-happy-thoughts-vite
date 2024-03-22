import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { HeartButton } from "./HeartButton.jsx";

export const MessageList = () => {
  const [messageData, setMessageData] = useState([]);
  const happyThoughtsUrl = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

  const fetchData = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setMessageData(json));
  };

  useEffect(() => fetchData(happyThoughtsUrl), []);

  const handleLike = (thoughtId) => {
    fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thoughtId}/like`, {
      method: "POST",
    }).then((response) => response.json());
    setMessageData(
      messageData.map((thought) => (thought._id === thoughtId ? { ...thought, hearts: thought.hearts + 1 } : thought))
    );
  };

  return (
    <section>
      {messageData.map((thought) => (
        <div key={thought._id}>
          <p>{thought.message}</p>
          <div>
            <HeartButton likes={thought.hearts} onLike={() => handleLike(thought._id)} />
          </div>
          <p>{thought.createdAt}</p>
        </div>
      ))}
    </section>
  );
};

MessageList.propTypes = {
  messageData: PropTypes.array,
  setMessageData: PropTypes.func,
};
