import { useState } from "react"

export const PostCreator = () => {
  const [newThought, setNewThought] = useState("")
  const [warningText, setWarningText] = useState("")
  const [characterCount, setCharacterCount] = useState(0)

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setNewThought(inputValue)
    setCharacterCount(inputValue.length)
  }

  const handleSubmit = async () => {

    try {
      const response = await fetch("https://arnaus-happy-thoughts-api.onrender.com/thoughts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: newThought }),
      });

      if (response.ok) {
        console.log("Thought sent successfully!");
        setWarningText ("")
        setNewThought("") // Clear textarea after successful submission
        setCharacterCount(0) // Reset character count
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
        <div className="textarea-footer">
          <p>{warningText}</p>
          <p className="character-count">{characterCount}/140</p>
        </div>
      </div>
      <button className="submit-button" onClick={handleSubmit}>💗 Send Happy Thought 💗</button>
    </div>
  )
}
