// import { useEffect } from "react"
import "./NewPost.css"


export const NewPost = () => {

  return (
    <div className="newPost-wrapper">
      <h2>What is making you happy right now?</h2>
      <form >
        <textarea placeholder="If music be the food of love, play on' - William Shakespeare" />

        <div className="post-length">
          <p className="error">Your message is too short, it needs at least 5 letters 😔</p>
          <p className="length ">0/140</p>
        </div>

          <button type="submit" value="Submit" className="submitBtn" aria-label="submit button">&#x2764;&#xFE0F; Send Happy Thought &#x2764;&#xFE0F;</button>
      </form>
    </div>
  )
}
