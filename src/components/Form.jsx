import PropTypes from "prop-types";

export const Form = (setThoughts) => {

const handleSend = (event) => {
  event.preventDefault();

//   // Send the POST request with the input from your form (instead
//   // of 'Hello world' like this example does):
//   fetch("<https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts>", {
//     method: "POST",
//     body: JSON.stringify({ message: "Hello world" }),
//     headers: { "Content-Type": "application/json" },
//   })
//     .then((res) => res.json())
//     .then((newThought) => {
//       // Now you have `newThought` which is the response from the
//       // API as documented at the top of this readme. You can use
//       // it to update the `thoughts` array:
//       setThoughts((previousThoughts) => [newThought, ...previousThoughts]);
//     });
};

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
