import "../Styles/Header.css"
import smilingHeart from "../assets/smilingheart.png";

export const Header = () => {
  return (
    <header>
      <img src={smilingHeart} alt="Smiling heart image" className="smiling-heart-icon" />
      <h1>&quot;The happiness of your life depends on the quality of your thoughts&quot;</h1>
      <p className="quote">- Marcus Aurelius</p>
    </header>
  )
}

