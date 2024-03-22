import { useState, useEffect } from "react";
import { PropTypes } from "prop-types";
import ThoughtsForm from "./ThoughtsForm.jsx";
import ThoughtsList from "./ThoughtsList.jsx";

export const HappyThoughts = () => {
  // useStates for thoughts list, new thoughts and loading
  const [thoughts, setThoughts] = useState([]);

  // fetch Thoughts
  const url = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

  const fetchHappyThoughts = () => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setThoughts(json);
      })
      .catch((error) => {
        console.error("Could not fetch thoughts:", error);
      });
  };
  // POST new thought

  // fetch updated list with new thought included

  // useEffect : fetch thoughts

  useEffect(() => {
    fetchHappyThoughts();
  }, []);

  return (
    <div className="wrapper">
      <ThoughtsForm />
      <ThoughtsList thoughts={thoughts} setThoughts={setThoughts} />
    </div>
  );
};

HappyThoughts.propTypes = {
  thoughts: PropTypes.array.isRequired,
};
