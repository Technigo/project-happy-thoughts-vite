import { Hearts } from "./Hearts.jsx"
import { Time } from "./Time.jsx"
import "./HappyThought.css"

export const HappyThought = ({ message, hearts, time }) => {
  return (
    <div className="thought-container">
      <div className="thought-message">
        <p>{message}</p>
      <div className="info-wrapper">
        <div className="info-likes">
        <Hearts hearts={hearts} />
        </div>
        <div className="info-time">
        <Time time={time} />
        </div>
        </div>
      </div>
    </div>
  )
}
