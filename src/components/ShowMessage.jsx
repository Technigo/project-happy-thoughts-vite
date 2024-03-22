import React from "react";
import PropTypes from "prop-types";
import "./ShowMessage.css";

export const ShowMessage = ({ messages, handleHeartClick }) => {
  const handleHeartButtonClick = (index) => {
    // Call the handleHeartClick function passed from the parent component
    handleHeartClick(index);
  };

  // Function to calculate time ago
  const calculateTimeAgo = (timestamp) => {
    const currentTime = new Date();
    const messageTime = new Date(timestamp);
    const differenceInSeconds = Math.floor((currentTime - messageTime) / 1000);

    if (differenceInSeconds < 60) {
      return `${differenceInSeconds} ${
        differenceInSeconds === 1 ? "second" : "seconds"
      } ago`;
    } else {
      const differenceInMinutes = Math.floor(differenceInSeconds / 60);

      if (differenceInMinutes < 60) {
        return `${differenceInMinutes} ${
          differenceInMinutes === 1 ? "minute" : "minutes"
        } ago`;
      } else {
        const differenceInHours = Math.floor(differenceInMinutes / 60);

        if (differenceInHours < 24) {
          return `${differenceInHours} ${
            differenceInHours === 1 ? "hour" : "hours"
          } ago`;
        } else {
          const differenceInDays = Math.floor(differenceInHours / 24);
          return `${differenceInDays} ${
            differenceInDays === 1 ? "day" : "days"
          } ago`;
        }
      }
    }
  };

  return (
    <div className="message-container">
      {messages.map((message, index) => (
        <div key={index} className="content">
          <p className="message">{message.message}</p>
          <div className="heart-container">
            <button
              className="heart-button"
              onClick={() => handleHeartButtonClick(index)}
            >
              <p>❤️</p>
            </button>
            <p>x {message.hearts}</p>
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
      createdAt: PropTypes.string.isRequired, // Assuming createdAt is a string
    })
  ).isRequired,
  handleHeartClick: PropTypes.func.isRequired, // Prop for handling heart button click
};
