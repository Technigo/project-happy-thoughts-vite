import PropTypes from "prop-types";
import "./Header.css";
import logoImage from "/Users/paulajungaker/Documents/Technigo/project-happy-thoughts-vite/src/assets/2530803_general_heart_heart beat_heart disease_heart rate_icon.png";

const Header = ({ title }) => {
  return (
    <header>
      <img src={logoImage} alt="heart-logo" className="logo" />
      <h1>{title}</h1>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
