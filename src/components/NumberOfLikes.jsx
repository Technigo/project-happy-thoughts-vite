import PropTypes from "prop-types";

export const NumberOfLikes = ({ totalNumberOfLikes }) => {
  return (
    <>
      <p>You have liked {totalNumberOfLikes} happy thoughts.</p>
    </>
  );
};

NumberOfLikes.propTypes = {
  totalNumberOfLikes: PropTypes.number,
};
