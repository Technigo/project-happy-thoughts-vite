import PropTypes from "prop-types";
import { Hearts } from "./Hearts";
import { Message } from "./Message";
import { Time } from "./Time";

export const Thought = (props) => {
  const renderThoughts = props.thoughts.map(({ _id, createdAt, hearts, message }) => {
    return (
      <div className="thought" key={_id}>
        <Message _id={_id} message={message} />
        <div className="lower-thought">
          <Hearts _id={_id} hearts={hearts} />
          <Time _id={_id} createdAt={createdAt} />
        </div>
      </div>
    );
  });
    
  return renderThoughts;
};

Thought.propTypes = {
  thoughts: PropTypes.array,
};
