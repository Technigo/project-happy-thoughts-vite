import "../styles/Header.css"
import smilingHeart from "../assets/smilingheart.png"

export const HeaderComponent = () => {
  return (
    <header>
      <img src={smilingHeart} alt="Smiling heart image" className="smiling-heart-icon" />
      <h1>Happy Thoughts</h1>
      <p className="quote">Created by Anna Hansen</p>
    </header>
  )
}

