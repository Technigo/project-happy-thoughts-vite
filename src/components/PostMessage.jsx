//import { useState, useEffect } from "react";
import PropTypes from "prop-types";

export const PostMessage = ({newThought, onNewMessage, onPostSubmit}) => {
    const disableSubmit =
      newThought.length < 5 || newThought.length > 140;

  return (
    <div className="post-form">
      <form
        onSubmit={onPostSubmit}
      >
        <label className="input-field">
            {" "}
            What makes you happy?
            <input
              className="text-field"
              type="text"
              onChange={onNewMessage}
              value={newThought}
              placeholder="Write here"
              required
            />
        </label>
        <button className="post-button" type="submit" disabled={disableSubmit}>
          Post
        </button>
      </form>
    </div>
  );
}

PostMessage.propTypes = {
  newThought: PropTypes.string.isRequired,
  onNewMessage: PropTypes.func,
  onPostSubmit: PropTypes.func,
};