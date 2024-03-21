import { formatDistance } from "date-fns";


import PropTypes from "prop-types"

export const TimeStamp = ({ time }) => {
    const writeTime = formatDistance(new Date(time), new Date(), {
      addSuffix: true,
    })
    
  return (
    <div className="time-box">
      <p>Posted {writeTime}</p>
    </div>
  );
};

TimeStamp.propTypes = {
  time: PropTypes.string,
};