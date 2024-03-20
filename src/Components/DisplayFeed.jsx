import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./DisplayFeed.css";

const HappyThought = ({ message, id }) => {
  return (
    <div key={id}>
      <p>{message}</p>
    </div>
  );
};

const DisplayFeed = () => {
  const [happyThoughts, setHappyThoughts] = useState([]);

  const postURL = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

  useEffect(() => {
    fetch(postURL)
      .then((response) => response.json())
      .then((data) => setHappyThoughts(data))
      .catch((error) =>
        console.error("Error fetching happy thoughts: ", error)
      );
  }, []);

  return (
    <div className="feedContainer">
      {happyThoughts.map((thought) => (
        <div key={thought._id} className="messageContainer">
          <HappyThought
            key={thought._id}
            message={thought.message}
            id={thought._id}
          />
        </div>
      ))}
    </div>
  );
};

HappyThought.propTypes = {
  message: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default DisplayFeed;
