export const Input = ({ input, onChange, inputLength }) => {
  return (
    <div className="input-container">
      <label>What's making you happy?</label>
      <textarea
        id="input-element"
        name="text"
        type="text"
        value={input}
        onChange={onChange}
        placeholder="add thought here..."
      />
      <p className={inputLength > 140 ? "over-limit" : "normal-length"}>
        {inputLength} / 140 characters
      </p>
    </div>
  );
};
