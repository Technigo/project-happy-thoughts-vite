import React from "react";
import PropTypes from "prop-types";
import "./ShowMessage.css";

export const ShowMessage = ({ messages }) => {
  return (
    <div className="message-container">
      {messages.map((message, index) => (
        <div key={index} className="content">
          <p className="message">{message.message}</p>
          <button className="heart-button">
            <p>❤️</p>
          </button>
          <p>x{message.hearts}</p>
        </div>
      ))}
    </div>
  );
};

ShowMessage.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string.isRequired,
      hearts: PropTypes.number.isRequired, // Add hearts prop type
    })
  ).isRequired,
};

// import React from "react";
// import PropTypes from "prop-types";
// import "./ShowMessage.css";

// export const ShowMessage = ({ messages }) => {
//   return (
//     <div className="messageContainer">
//       {messages.map((message, index) => (
//         <p key={index} className="message">
//           {message.message}
//         </p>
//       ))}
//     </div>
//   );
// };

// ShowMessage.propTypes = {
//   messages: PropTypes.arrayOf(
//     PropTypes.shape({
//       message: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };
