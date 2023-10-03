import "./Header.css";

export const Header = () => {
  return (
    <header>
      <div className="project-name">
        <a href="https://github.com/JuliaHolm">Julia Holm</a>
        <a href="https://github.com/JuliaHolm">
          <img
            src="/src/assets/github-mark.svg"
            alt=""
            className="github-icon"
          />
        </a>
        <p>Technigo Project Happy Thoughts</p>
      </div>
      <div className="liked-posts">
        <p>Liked posts: 0</p>
        <img src="/src/assets/heart-likes.png" alt="" />
      </div>
    </header>
  );
};
