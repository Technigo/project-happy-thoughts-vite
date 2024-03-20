export const Likes = ({ likes }) => {
  return (
    <div className="likes">
      <button className="heart-button">❤️</button>
      <p className="likes">x {likes}</p>
    </div>
  );
};
