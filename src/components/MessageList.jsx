import PropTypes from "prop-types";
import { useEffect } from "react";
import { getTimeSince } from "../helpers/getTimeSince.jsx";
import { HeartButton } from "./HeartButton.jsx";

export const MessageList = ({
  loading,
  setLoading,
  messageData,
  setMessageData,
  totalNumberOfLikes,
  setTotalNumberOfLikes,
}) => {
  const happyThoughtsUrl = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

  useEffect(() => {
    fetch(happyThoughtsUrl)
      .then((response) => response.json())
      .then((json) => setMessageData(json))
      .catch((error) => console.log(error));
    setTimeout(() => setLoading(false), 2000);
  }, [setMessageData, setLoading]);

  return (
    <>
      {loading ? (
        <>
          <i className="fa-solid fa-heart fa-beat fa-5x"></i>
          <p>Loading</p>
        </>
      ) : (
        messageData.map((thought) => (
          <div className="message-box" key={thought._id}>
            <p>{thought.message}</p>
            <div className="heart-time-container">
              <div className="heartbutton-container">
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
          </div>
        ))
      )}
    </>
  );
};

MessageList.propTypes = {
  messageData: PropTypes.array,
  setMessageData: PropTypes.func,
  totalNumberOfLikes: PropTypes.number,
  setTotalNumberOfLikes: PropTypes.func,
  loading: PropTypes.bool,
  setLoading: PropTypes.func,
};
