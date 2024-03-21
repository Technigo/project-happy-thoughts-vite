/*import { useState, useEffect } from "react";
import PropTypes from "prop-types";

export const LikeCount = ({thoughts, setThoughts}) => {
  const [likeCount, setLikeCount] = useState([]);

  const URL = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

  const fetchLikeCount = async () => {
    fetch(URL)
      .then((result) => {
        if (!result.ok) {
          throw new Error("Network is bad. Please reload the Page.");
        }
        return result.json();
      })
      .then((data) => {
        setLikeCount(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching the data:", error);
      });
  };

  useEffect(() => {
    fetchLikeCount();
  }, []);

  return (
    <div className="likes-box">
      {likeCount.map((likeCount, index) => (
        <p className="like-count" key={index}>
          x{likeCount.hearts}
        </p>
      ))}
    </div>
  );
};

LikeCount.propTypes = {
  likeCount: PropTypes.any,
  setLikeCount: PropTypes.any,
};*/
