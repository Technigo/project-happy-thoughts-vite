import { useState, useEffect } from "react";
import { Hearts } from "./Hearts";
import { Message } from "./Message";
import { Time } from "./Time";

export const Thought = (props) => {


  return (
    <div className="thought">
          <Message thoughts={ props } />
      <div className="lower-thought">
        <Hearts />
        <Time />
      </div>
    </div>
  );
};
