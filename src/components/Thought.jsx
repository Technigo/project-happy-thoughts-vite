// import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Hearts } from "./Hearts";
import { Message } from "./Message";
import { Time } from "./Time";

export const Thought = (props) => {
  console.log("props: ", props);

  const renderThoughts = props.thoughts.map(({ _id, createdAt, hearts, message }) => {
    console.log(message);
    return (
      <div className="thought" key={_id}>
        <Message key={_id} message={message} />
        <div className="lower-thought">
          <Hearts key={_id} hearts={hearts} />
          <Time key={_id} createdAt={createdAt} />
        </div>
      </div>
    );
  });
    
    
  return renderThoughts;
};

Thought.propTypes = {
  thoughts: PropTypes.array,
};
