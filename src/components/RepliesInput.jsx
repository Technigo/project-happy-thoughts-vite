import { useState, useEffect } from "react"

export const RepliesInput = ({newReplies, onNewRepliesChange, onFormSubmit }) => {

  const [errorMessage, setErrorMessage] = useState("")

useEffect(() => {
  if (newReplies.length >= 141) {
    setErrorMessage("long")
  } else if (newReplies.length < 4) {
    setErrorMessage("short")
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