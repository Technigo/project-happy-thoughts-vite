import "./thought.css";

export const Thought = ({ message, hearts, time, loadingThoughts, getThought }) => {


  return (
    <div className="body">
      <div>{loadingThoughts ? "Loading thoughts..." : getThought}</div>
      <div id="message">{message}</div>
      <div>
        <button>❤️x{hearts}</button>
      </div>
      <div id="time">{time}</div>
    </div>
  );
};

