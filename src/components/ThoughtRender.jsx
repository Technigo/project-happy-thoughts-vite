import { useEffect } from "react";
import PropTypes from "prop-types";

export const ThoughtRender = ({ setThoughts }) => {
  const URL = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

  useEffect(() => {
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
  }, []);

  return null;
};

ThoughtRender.propTypes = {
  setThoughts: PropTypes.any,
};
