import { useEffect } from "react";
import PropTypes from "prop-types";
import "./Thought.css";

export const Thought = ({ thoughts, setThoughts }) => {
  const URL = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

  //const [setLikes] = useState();

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

  const handleLikeClick = () => {
    console.log(thoughts);

    thoughts.forEach((thought) => {
      const URL2 = `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thought._id}/like`;

      fetch(URL2, {
        method: "POST",
      })
        .then((result) => result.json())
        .then((newLike) => {
          const updatedThoughts = thoughts.map((thought) => {
            return { ...thought, hearts: newLike.hearts };
          });

          setThoughts(updatedThoughts);
          // setLikes(newLike.hearts + 1);
        })

        .catch((error) => {
          console.error("Error fetching the data:", error);
        });
    });
  };

  useEffect(() => {
    fetchThoughts();
  }, []);

  return (
    <div className="thoughts-box">
      {thoughts.length > 0 ? (
        <ul>
          {thoughts.map((thought, _id) => (
            <li className="thought" key={_id}>
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
