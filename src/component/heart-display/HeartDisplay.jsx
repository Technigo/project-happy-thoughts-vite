export const HeartDisplay = ({ post }) => {
  return (
    <>
      <p className="heart-icon">❤️</p>
      <p className="heart-amount"> x {post.hearts}</p>
    </>
  );
};
