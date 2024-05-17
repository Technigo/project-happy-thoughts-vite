import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import "./ShowMessage.css";

export const ShowMessage = ({ messages, handleHeartClick, error }) => {
  const handleHeartButtonClick = (index) => {
    handleHeartClick(index);
  };

  const calculateTimeAgo = (timestamp) => {
    return moment(timestamp).fromNow();
  };

  // const calculateTimeAgo = (timestamp) => {
  //   const currentTime = new Date();
  //   const messageTime = new Date(timestamp);
  //   const differenceInSeconds = Math.floor((currentTime - messageTime) / 1000);

  //   if (differenceInSeconds < 60) {
  //     return `${differenceInSeconds} ${
  //       differenceInSeconds === 1 ? "second" : "seconds"
  //     } ago`;
  //   } else {
  //     const differenceInMinutes = Math.floor(differenceInSeconds / 60);

  //     if (differenceInMinutes < 60) {
  //       return `${differenceInMinutes} ${
  //         differenceInMinutes === 1 ? "minute" : "minutes"
  //       } ago`;
  //     } else {
  //       const differenceInHours = Math.floor(differenceInMinutes / 60);

  //       if (differenceInHours < 24) {
  //         return `${differenceInHours} ${
  //           differenceInHours === 1 ? "hour" : "hours"
  //         } ago`;
  //       } else {
  //         const differenceInDays = Math.floor(differenceInHours / 24);
  //         return `${differenceInDays} ${
  //           differenceInDays === 1 ? "day" : "days"
  //         } ago`;
  //       }
  //     }
  //   }
  // };

  return (
    <div className="message-container">
      {error && <p className="error-text">{error}</p>}{" "}
      {messages.map((message, index) => (
        <div key={index} className="content">
          <p className="message">{message.message}</p>
          <div className="likes-and-timestamp">
            <div className="likes-container">
              <button
                className="heart-button"
                onClick={() => handleHeartButtonClick(index)}
              >
                <p>❤️</p>
              </button>
              <p className="likes-count">x {message.hearts}</p>
            </div>
            <p className="timestamp">{calculateTimeAgo(message.createdAt)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

ShowMessage.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string.isRequired,
      hearts: PropTypes.number.isRequired,
      createdAt: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleHeartClick: PropTypes.func.isRequired,
  error: PropTypes.string,
};
