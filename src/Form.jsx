import { useState } from "react";

// Here is where we create the form/input field
export const Form = (props) => {


  return (
    <form className="form" onSubmit={props.onSubmit}>
      <label className="label" htmlFor="message">
        What's making you happy right now?
      </label>
      <textarea
        className="textInput"
        id="message"
        rows="3"
        onChange={props.onChange}
        value={props.message} // this is the value of the input field
      ></textarea>
      <button className="submitButton" type="submit">
        ❤️ Send Happy Thought ❤️
      </button>
    </form>
  );
};
