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
