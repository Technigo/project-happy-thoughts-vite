import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Thought.css";

export const Thought = ({ thoughts, setThoughts }) => {
  const URL = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

  const [setLikes] = useState("");

  const fetchThoughts = async () => {
    fetch(URL)
      .then((result) => {
        if (!result.ok) {
          throw new Error("Network is bad. Please reload the Page.");
        }
        return result.json();
      })
      .then((data) => {
        setThoughts(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching the data:", error);
      });
  };

  useEffect(() => {
    fetchThoughts();
  }, []);

  const handleLikeClick = async (event, _id) => {
    event.preventDefault();

    const URL2 = `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${_id}/like`;

    fetch(URL2, {
      method: "POST",
    })
      .then((result) => result.json())
      .then((newLike) => {
        setThoughts((prevThoughts) => ({
          ...prevThoughts,
          hearts: newLike.hearts,
        }));
        setLikes((likes) => likes + 1);
      })

      .catch((error) => {
        console.error("Error fetching the data:", error);
      });
  };

  return (
    <div className="thoughts-box">
      {thoughts.length > 0 ? (
        <ul>
          {thoughts.map((thought, index) => (
            <li className="thought" key={index}>
              {thought.message}
              <br></br>
              <button onClick={handleLikeClick}>Like</button>
              <br></br>x {thought.hearts}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading . . . </p>
      )}
    </div>
  );
};

Thought.propTypes = {
  thoughts: PropTypes.any,
  setThoughts: PropTypes.any,
  thoughtId: PropTypes.any,
};
