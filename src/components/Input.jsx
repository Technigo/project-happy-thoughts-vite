export const Input = ({ input, onChange, charCount}) => {
  return (
    <div className="input-container">
      <label>What's making you happy?</label>
        <textarea
          name="text"
          type="text"
          value={input}
          onChange={onChange}
          maxLength={140}
          placeholder="add thought here..."
          />
          <p>{charCount} / 140 characters</p>
    </div>
  )
}