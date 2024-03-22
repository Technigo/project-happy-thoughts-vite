import React from "react";
import PropTypes from "prop-types";
import "./ShowMessage.css";

export const ShowMessage = ({ messages, handleHeartClick }) => {
  const handleHeartButtonClick = (index) => {
    // Call the handleHeartClick function passed from the parent component
    handleHeartClick(index);
  };

  return (
    <div className="message-container">
      {messages.map((message, index) => (
        <div key={index} className="content">
          <p className="message">{message.message}</p>
          <button
            className="heart-button"
            onClick={() => handleHeartButtonClick(index)}
          >
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
      hearts: PropTypes.number.isRequired,
    })
  ).isRequired,
  handleHeartClick: PropTypes.func.isRequired, // Prop for handling heart button click
};

// import React from "react";
// import PropTypes from "prop-types";
// import "./ShowMessage.css";

// export const ShowMessage = ({ messages }) => {
//   return (
//     <div className="message-container">
//       {messages.map((message, index) => (
//         <div key={index} className="content">
//           <p className="message">{message.message}</p>
//           <button className="heart-button">
//             <p>❤️</p>
//           </button>
//           <p>x{message.hearts}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// ShowMessage.propTypes = {
//   messages: PropTypes.arrayOf(
//     PropTypes.shape({
//       message: PropTypes.string.isRequired,
//       hearts: PropTypes.number.isRequired,
//     })
//   ).isRequired,
// };
