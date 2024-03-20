

export const ThoughtCreator = () => {
  return (
    <div className="creator-card">
      <div>
        <label htmlFor="textarea">What is making you happy right now?</label>
        <textarea
          className="thought-input"
          placeholder="Type here..."
          maxLength={140}
        />
      </div>
      <button className="submit-button">💗Send Happy Thought💗</button>
    </div>
  )
}
