import PropTypes from "prop-types"

export const TimeStamp = ({ time }) => {

  return (
    <div className="time-box">
      <p>Posted {time}</p>
    </div>
  );
};

TimeStamp.propTypes = {
  time: PropTypes.string,
};
