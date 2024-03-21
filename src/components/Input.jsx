export const Input = ({ input, onChange, charCount}) => {
  return (
    <div className="input-container">
      <label>Send your happy thoughts!</label>
        <input
          name="text"
          type="text"
          value={input}
          onChange={onChange}
          maxLength={140}
          />
          <p>{charCount} / 140 characters</p>
    </div>
  )
}