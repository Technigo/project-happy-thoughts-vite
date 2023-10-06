/* eslint-disable react/prop-types */
// import { useEffect, useState } from "react"
import moment from "moment"; // Import Moment.js
import "./Message.css"

export const Message = ({ thoughts }) => {
  
  return (
    <div>
      {thoughts.map((thought) => (
        <div key={thought._id} className="message-wrapper">
          <p>{thought.message}</p>
          <div className="likes-wrapper">
            <button type="button" id="likeBtn" className="like-button">
              <span aria-label="like button">❤️</span>
            </button>
            <p>{thought.hearts}</p>
            <div className="info-time">{moment(thought.createdAt).fromNow()}</div>
          </div>
        </div>
      ))}
    </div>
  );
};