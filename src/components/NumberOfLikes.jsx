import PropTypes from "prop-types";

export const NumberOfLikes = ({ totalNumberOfLikes }) => {
  return (
    <>
      <p>Your total number of likes: {totalNumberOfLikes}</p>
    </>
  );
};

NumberOfLikes.propTypes = {
  totalNumberOfLikes: PropTypes.number,
};
