// PostLikes.jsx

export const PostLikes = ({ recentThoughtLikes }) => {
  const buttonClass = recentThoughtLikes > 0 ? 'post-btn liked' : 'post-btn';

  return (
    <div className="post-btn-container">
      <button className={buttonClass}>
        ❤️
      </button>
      <p>x {recentThoughtLikes}</p>
    </div>
  );
};