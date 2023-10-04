import { useState, useEffect } from "react"

export const RepliesInput = ({newReplies, onNewRepliesChange, onFormSubmit }) => {

  const [errorMessage, setErrorMessage] = useState("")

useEffect(() => {
  if (newReplies.length >= 141) {
    setErrorMessage("too long! try to explain within 140 characters")
  } else if (newReplies.length > 0 && newReplies.length < 4) {
    setErrorMessage("too short, we want to hear more from you!")
  } else if (newReplies.length === 0) {
    setErrorMessage("lets write something :D")
  } else {
    setErrorMessage("")
  }
}, [newReplies])

  return(
    <fieldset>
    <form onSubmit={onFormSubmit}>
      <h1>what makes you happy</h1>
      <textarea placeholder="exchange thoughts and have hint how others doing" value={newReplies} onChange={onNewRepliesChange}></textarea>
      {/* <p className={`${newReplies.length >= 140 ? "red" : ""}`}>{newReplies.length}/140</p> */}
      <p>{errorMessage}</p>
      <p style={{ color: newReplies.length >=140 ? 'red' : 'inherit' }}>{newReplies.length}/140</p>
      <button type="submit">send happy thought</button>
    </form>
    </fieldset>
  )
}