import PropTypes from "prop-types";

export const Time = (props) => {
  const now = new Date();
  const created = new Date(props.createdAt);

  function timeSince(created) {
    var seconds = Math.floor((now - created) / 1000);

    var interval = seconds / 31536000;

    if (interval > 1) {
      return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  }

  return <p>{timeSince(created)} ago</p>;
};

Time.propTypes = {
  createdAt: PropTypes.string,
};
