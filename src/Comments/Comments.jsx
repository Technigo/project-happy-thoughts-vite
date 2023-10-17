import { useState, useEffect } from "react";
import UserInput from "./UserInput";
import TimeAgo from "timeago-react";

export const ThoughtList = ({}) => {
  const [loading, setLoading] = useState(true);
  const [thoughts, setThoughtList] = useState([]);
  const [likes, setLikes] = useState({});
  const [time, setTime] = useState(null);

  const fetchData = () => {
    fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Fetched data:", data);
        setThoughtList(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch data", error);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    setTime(Date.now());
    fetchData();
  }, []);

  const handleLike = (thoughtId) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [thoughtId]: (prevLikes[thoughtId] || 0) + 1,
    }));
  };

  const refreshList = () => {
    fetchData();
  };

  return (
    <div className="container">
      <UserInput newThoughtPosted={refreshList} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        thoughts.map((thought) => (
          <div key={thought._id} className="textBox">
            <p>{thought.message}</p>
            <div className="like-time">
              <div className="likeBtn">
                <button
                  onClick={() => handleLike(thought._id)}
                  className="heart"
                >
                  ❤️
                </button>
                <p> X {likes[thought._id] || 0}</p>
              </div>
              <div className="time">
                <TimeAgo opts={{ minInterval: "60" }} datetime={time} />
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
