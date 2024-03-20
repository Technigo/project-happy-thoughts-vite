import PropTypes from "prop-types";

export const Hearts = (props) => {
    const heartURL = `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${props._id}/like`;
    console.log(heartURL)


    const handleClick = () => {
        // Add post method here. with heartURL.

  };

  return (
    <div className="heart-info">
      <button className="heart-button" onClick={handleClick}>
        ❤️
      </button>
      <p>x {props.hearts}</p>
    </div>
  );
};

Hearts.propTypes = {
    hearts: PropTypes.string,
    _id: PropTypes.string,
};
