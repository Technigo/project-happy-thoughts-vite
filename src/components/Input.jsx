export const Input = ({ input, onChange}) => {
  return (
    <div className="input-container">
      <label>Send your happy thoughts!</label>
        <input 
          name="text"
          type="text"
          value={input}
          onChange={onChange}
        />
    </div>
  )
}