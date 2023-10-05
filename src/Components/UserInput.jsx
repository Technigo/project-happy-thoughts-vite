export const UserInput = () => {
  return (
    <div className="inputContainer">
      <h1>What is making you happy right now?</h1>
      <label>
        <textarea
          className="input"
          rows="5"
          cols="33"
          placeholder="'Happiness is a state of mind. It’s just according to the way you look at things.' – Walt Disney"
        ></textarea>
      </label>
      <button className="like">❤️Send Happy Thought❤️</button>
    </div>
  );
};

export default UserInput;
