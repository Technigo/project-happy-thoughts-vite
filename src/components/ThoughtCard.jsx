const ThoughtCard = ({ message, likes, time }) => {
  return (
    <div>
      <p>{message}</p>
      <p>♥️{likes}</p>
      <p>{time}</p>
    </div>
  );
};

export default ThoughtCard;
