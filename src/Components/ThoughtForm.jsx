import { useState } from "react";
import "../Styles/ThoughtForm.css";

export const ThoughtForm = () => {

  const [body, setBody] = useState('');
  const [response, setResponse] = (null);

  const handleSubmit = async (event) => {
    event.preventDeafult()
    const URL = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts"

    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        body,
        userId: 1
      });
    })
    const data = await response.json()
    setResponse()
  }

  return (
    <div className="thought-form">;
      <h3>What´s making you happy right now?</h3>;
      <form onSubmit={handleSubmit}>;
        <textarea
          value={body}
          onChange={(event) => setBody(event.target.value)}
        />
        <button type="submit">❤️Send happy thought❤️</button>
      </form>
    </div>
  )
}

