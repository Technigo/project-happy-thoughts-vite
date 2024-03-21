

export const ThoughtCreator = () => {
  const [newThought, setNewThought] = useState("")

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
        // Optionally, you can fetch the thoughts again to update the UI with the newly added thought
      } else {
        console.error("Failed to send thought:", response.statusText);
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
      </div>
      <button className="submit-button" onClick={handleSubmit}>💗 Send Happy Thought 💗</button>
    </div>
  )
}
