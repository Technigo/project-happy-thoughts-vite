import { useEffect, useState } from "react"
import "./Message.css"

export const Message = () => {
  const [thoughts, setThoughts] = useState();


  useEffect(() => {
    fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
      .then(response => response.json())
      .then(json => setThoughts(json[0].message))
    
    
  }
  )
  return (
    <div className="message-wrapper">
      <p>{thoughts}</p>
      <div className="likes-wrapper">
      <button type="button" id="likeBtn" className="like-button"><span aria-label="like button">❤️</span></button>
        <p>x1</p>
        <div className="info-time">1 minute  ago</div>
        </div>
    </div>
  )
}
