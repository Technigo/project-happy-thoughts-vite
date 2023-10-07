import PropTypes from 'prop-types';

function TimeAgo({ createdAt }) {
  const currentDate = new Date();
  const createdDate = new Date(createdAt);

  const timeDifference = currentDate - createdDate;

  // Define time intervals in milliseconds
  const minute = 60 * 1000;
  const hour = minute * 60;
  const day = hour * 24;
  const month = day * 30;

  if (timeDifference < minute) {
    const seconds = Math.floor(timeDifference / 1000);
    return <span>{`${seconds} second${seconds !== 1 ? 's' : ''} ago`}</span>;
  } else if (timeDifference < hour) {
    const minutes = Math.floor(timeDifference / minute);
    return <span>{`${minutes} minute${minutes !== 1 ? 's' : ''} ago`}</span>;
  } else if (timeDifference < day) {
    const hours = Math.floor(timeDifference / hour);
    return <span>{`${hours} hour${hours !== 1 ? 's' : ''} ago`}</span>;
  } else if (timeDifference < month) {
    const days = Math.floor(timeDifference / day);
    return <span>{`${days} day${days !== 1 ? 's' : ''} ago`}</span>;
  } else {
    const months = Math.floor(timeDifference / month);
    return <span>{`${months} month${months !== 1 ? 's' : ''} ago`}</span>;
  }
}

TimeAgo.propTypes = {
  createdAt: PropTypes.string.isRequired, // Change the type to match the actual data type (string or Date)
};

export default TimeAgo;
