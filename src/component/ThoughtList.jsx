import React from "react";

const ThoughtList = ({ setLiked, thoughts }) => {
  const likeThought = async (id) => {
    try {
      await fetch(
        `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${id}/like`,
        { method: "POST" }
      );

      setLiked();
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  //Convert the timestamp
  function formatTimeAgo(createdAt) {
    const currentDate = new Date();
    const postDate = new Date(createdAt);

    const timeDifference = Math.floor((currentDate - postDate) / 1000);

    if (timeDifference < 60) {
      return `in less than a minute`;
    } else if (timeDifference < 3600) {
      const minutes = Math.floor(timeDifference / 60);
      return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
    } else if (timeDifference < 86400) {
      const hours = Math.floor(timeDifference / 3600);
      return `${hours} hour${hours !== 1 ? "r" : ""} ago`;
    } else {
      const days = Math.floor(timeDifference / 86400);
      return `${days} day${days !== 1 ? "s" : ""} ago`;
    }
  }

  return (
    <div>
      {thoughts.map((thought) => (
        <div className="thoughList" key={thought._id}>
          <div>{thought.message}</div>{" "}
          <div className="sameRow">
            <div>
              <button
                className="heart"
                onClick={() => likeThought(thought._id)}
              >
                ❤️
              </button>{" "}
              x{thought.hearts}
            </div>{" "}
            <div>{formatTimeAgo(thought.createdAt)}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ThoughtList;
