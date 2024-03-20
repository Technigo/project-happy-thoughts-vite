export const Form = () => {
   
    return (
      <div className="form">
        <p> What's making you happy right now?</p>
        <textarea
          name=""
          id=""
          cols="20"
          rows="4"
          placeholder="Write here..."
        ></textarea>
        <button className="send-button">❤️ Send Happy Thought ❤️</button>
      </div>
    );
};
