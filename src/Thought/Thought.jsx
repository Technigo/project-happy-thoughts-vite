import { PropTypes } from 'prop-types';

export const Thought = ({ message }) => {
  return <div className="thought">{message}</div>;
};

Thought.propTypes = {
  message: PropTypes.string.isRequired,
};
