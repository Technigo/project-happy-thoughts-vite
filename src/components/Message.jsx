import PropTypes from "prop-types";

export const Message = (props) => {
  return <p>{props.message}</p>;
};

Message.propTypes = {
  message: PropTypes.string,
};
