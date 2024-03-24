import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { getTimeSince } from "../helpers/getTimeSince.jsx";
import { HeartButton } from "./HeartButton.jsx";

export const MessageList = ({ messageData, setMessageData, totalNumberOfLikes, setTotalNumberOfLikes }) => {
  const [loading, setLoading] = useState(true);
  const happyThoughtsUrl = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

  useEffect(() => {
    fetch(happyThoughtsUrl)
      .then((response) => response.json())
      .then((json) => setMessageData(json))
      .catch((error) => console.log(error));
    setTimeout(() => setLoading(false), 2000);
  }, [setMessageData]);

  return (
    <section>
      {loading ? (
        <>
          <i className="fa-solid fa-heart fa-beat fa-5x"></i>
          <p>Loading</p>
        </>
      ) : (
        messageData.map((thought) => (
          <div key={thought._id}>
            <p>{thought.message}</p>
            <div>
              <HeartButton
                likes={thought.hearts}
                thoughtId={thought._id}
                messageData={messageData}
                setMessageData={setMessageData}
                totalNumberOfLikes={totalNumberOfLikes}
                setTotalNumberOfLikes={setTotalNumberOfLikes}
              />
            </div>
            <p>{getTimeSince(thought.createdAt)}</p>
          </div>
        ))
      )}
    </section>
  );
};

MessageList.propTypes = {
  messageData: PropTypes.array,
  setMessageData: PropTypes.func,
  totalNumberOfLikes: PropTypes.number,
  setTotalNumberOfLikes: PropTypes.func,
};
