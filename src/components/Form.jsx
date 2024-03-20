import PropTypes from "prop-types";

export const Form = () => {

    const handleSend = () => {
        console.log(form.value)

    }

  return (
    <div className="form">
      <p> What's making you happy right now?</p>
      <textarea
        name=""
        id="textForm"
        cols="20"
        rows="4"
        placeholder="Write here..."
      ></textarea>
      <button className="send-button" onClick={handleSend}>❤️ Send Happy Thought ❤️</button>
    </div>
  );
};

Form.propTypes = {
  thoughts: PropTypes.array,
};
