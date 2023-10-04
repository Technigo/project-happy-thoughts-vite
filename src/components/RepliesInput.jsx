export const RepliesInput = ({newReplies, onNewRepliesChange, onFormSubmit }) => {
  return(
    <fieldset>
    <form onSubmit={onFormSubmit}>
      <h1>what makes you happy</h1>
      <textarea placeholder="exchange thoughts and have hint how others doing" value={newReplies} onChange={onNewRepliesChange}></textarea>
      <p>{newReplies.length}/140</p>
      <button type="submit">send happy thought</button>
    </form>
    </fieldset>
  )
}