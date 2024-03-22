import { useEffect } from "react";
import PropTypes from "prop-types";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/loadingAnimation.json";

export const ThoughtRender = ({ setThoughts, loading, setLoading }) => {
  const URL = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

  useEffect(() => {
    const loadingTime = setTimeout(() => {
      fetch(URL)
        .then((result) => {
          if (!result.ok) {
            throw new Error("Network is bad. Please reload the Page.");
          }
          return result.json();
        })
        .then((data) => {
          setThoughts(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching the data:", error);
          setLoading(false);
        });
    }, 4000);

    return () => clearTimeout(loadingTime);
  }, []);

  if (loading) {
    return <Lottie animationData={loadingAnimation} loop={true} />;
  }

  return null;
};

ThoughtRender.propTypes = {
  setThoughts: PropTypes.any,
  loading: PropTypes.any,
  setLoading: PropTypes.any,
};
