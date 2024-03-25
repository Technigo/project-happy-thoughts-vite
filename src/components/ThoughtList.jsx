import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ThoughtItem from "./ThoughtItem";
import styles from "./ThoughtList.module.css";

const ThoughtList = () => {
  const [thoughts, setThoughts] = useState([]);

  useEffect(() => {
    fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setThoughts(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className={styles.thoughtList}>
      {thoughts.map((thought) => (
        <ThoughtItem key={thought._id} thought={thought} />
      ))}
    </div>
  );
};

ThoughtList.propTypes = {
  thoughts: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
      hearts: PropTypes.number,
      createdAt: PropTypes.string,
    })
  ).isRequired,
};

export default ThoughtList;
