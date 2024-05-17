import PropTypes from "prop-types";

export const Hearts = (props) => {
  const heartURL = `https://happy-thoughts-api-uu1o.onrender.com/thoughts${props._id}/like`;

  const handleClick = () => {
    fetch(heartURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
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
  hearts: PropTypes.number,
  _id: PropTypes.string,
};
