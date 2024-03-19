import { useState } from "react";

export const PostMessage = () => {
    const [submit, setSubmit] = useState(false);
    const [message, setMessage] = useState("");

    let handleSubmit = () => {
        setSubmit(submit ? "false" : "true")
    }

  return (
    <div className="post-form">
      <form onSubmit={(event) => event.preventDefault()}>
        <div className="input-field">
          <label>
            {" "}
            What makes you happy?
            <input
              className="text-field"
              type="text"
              onChange={(event) => setMessage(event.target.value)}
              value={message}
              placeholder="Write here"
              required
            />
          </label>
        </div>
        <button type="submit" onClick={handleSubmit} className="button">
          Submit
        </button>
      </form>
    </div>
  );
}
