import { useState } from "react"

export const PostCreator = () => {
  const [newThought, setNewThought] = useState("")
  const [warningText, setWarningText] = useState("")

  const handleInputChange = (event) => {
    setNewThought(event.target.value)
  }

  const handleSubmit = async () => {

    try {
      const response = await fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: newThought }),
      });

      if (response.ok) {
        console.log("Thought sent successfully!");
        setWarningText ("")
      } else {
        console.error("Failed to send thought:", response.statusText);
        setWarningText ("Thoughts text between 5 to 140 characters")
      }
    } catch (error) {
      console.error("Error sending thought:", error);
    }
  };

  return (
    <div className="creator-card">
      <div>
        <label htmlFor="textarea">What is making you happy right now?</label>
        <textarea
          className="textarea-input"
          placeholder="Type here..."
          minLength={5}
          maxLength={140}
          value={newThought}
          onChange={handleInputChange}
        />
        <p>{warningText}</p>
      </div>
      <button className="submit-button" onClick={handleSubmit}>💗 Send Happy Thought 💗</button>
    </div>
  )
}
