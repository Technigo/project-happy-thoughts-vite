import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import NewPost from "./NewPost";
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

  const handleSubmit = async (newThought) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-type": "application/json " },
      body: JSON.stringify({ message: newThought }),
    };

    const response = await fetch(postURL, requestOptions);
    const data = await response.json();

    setHappyThoughts([data, ...happyThoughts]);
  };

  return (
    <div className="feedContainer">
      {/* Display the NewPost component*/}
      <NewPost onSubmit={handleSubmit} />

      {/* Map through happyThoughts to display existing posts */}
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
