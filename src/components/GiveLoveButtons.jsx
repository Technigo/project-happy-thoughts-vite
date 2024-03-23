export const GiveLoveButtons = ({ setLikesPerClick }) => {
  return (
    <div className="give-love-container">
      <p>How much love do you have today?</p>
      <div>
        <button className="give-love-buttons" onClick={() => setLikesPerClick(1)}>x 1</button>
        <button className="give-love-buttons" onClick={() => setLikesPerClick(10)}>x 10</button>
        <button className="give-love-buttons" onClick={() => setLikesPerClick(100)}>x 100</button>
      </div>
    </div>
  );
};