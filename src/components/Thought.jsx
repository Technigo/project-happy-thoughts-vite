import { useEffect } from "react";
import PropTypes from "prop-types";

export const Thought = ({ thoughts, setThoughts }) => {
  const URL = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

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

  return (
    <div className="thoughts-box">
      {thoughts.length > 0 ? (
        <ul>
          {thoughts.map((thought, index) => (
            <li className="thought" key={index}>
              {thought.message}
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
};
