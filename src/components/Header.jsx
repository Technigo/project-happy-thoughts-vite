import "./Header.css";

// Define a functional component named Header that takes a prop totalLikes.
export const Header = ({ totalLikes }) => {
  return (
    <header>
      {/* Render the name of the project and GitHub link */}
      <div className="project-name">
        <a href="https://github.com/JuliaHolm">Julia Holm</a>
        <a href="https://github.com/JuliaHolm">
          {/* Render the GitHub icon */}
          <img src="./github-mark.svg" alt="" className="github-icon" />
        </a>
        <p>Technigo Project Happy Thoughts</p>
      </div>
      {/* Render the liked posts section */}
      <div className="liked-posts">
        <p>Liked posts: {totalLikes}</p>
        {/* Render a heart icon */}
        <img src="./heart-likes.png" alt="" />
      </div>
    </header>
  );
};
