import { useState, useEffect } from "react";

export const PostMessage = () => {
    const [submit, setSubmit] = useState(false);
    const [message, setMessage] = useState("");
    const [postedMessage, setPostedMessage] = useState("")

    useEffect(() => {
      fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts", {
        method: "POST",
        body: JSON.stringify({
          message: { message },
        }),
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json)
          setPostedMessage(json.message)
        });
      /*.then((newThought) => {
            setThoughts((previousThoughts) => [newThought, ...previousThoughts])
          })*/
    }, [submit] 
    )

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
        <button
          className="post-button"
          type="submit"
          onClick={() => setSubmit(!submit)}
        >
          Post
        </button>
      </form>
      <p>{postedMessage}</p>
    </div>
  );
}
