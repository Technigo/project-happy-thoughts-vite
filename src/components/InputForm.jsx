import { URL } from "../utils/api";

export const InputForm = ({ setMessage, message, setThoughts }) => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: message }),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      setThoughts((prevThoughts) => [data, ...prevThoughts]);
      setMessage("");
    } catch (error) {
      console.error("Error submitting thought:", error);
    }
  };

  const MAX_CHARS = 140;

  return (
    <div className="thought-container input-form">
      What's making you happy right now?
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <div
          className={`char-counter ${message.length > MAX_CHARS ? "error" : ""}`}
        >
          {MAX_CHARS - message.length} characters remaining
        </div>
        <button
          disabled={message.length < 5 || message.length > MAX_CHARS}
          className={`submit ${message.length < 5 || message.length > MAX_CHARS ? "disabled" : "liked"}`}
        >
          ❤️ Send Happy Thought ❤️
        </button>
      </form>
    </div>
  );
};
