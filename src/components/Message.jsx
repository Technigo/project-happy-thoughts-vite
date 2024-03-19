export const Message = ({ messages }) => {
  return (
    <div className="message-container">
      {messages.map((message, index) => (
        <div className="message-box" key={index}>
          {message.message}
        </div>
      ))}
    </div>
  );
};
