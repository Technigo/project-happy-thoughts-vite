export const RepliesInput = ({newReplies, onNewRepliesChange, onFormSubmit }) => {
  return(
    <form onSubmit={onFormSubmit}>
      <h1>what makes you happy</h1>
      <textarea placeholder="exchange thoughts and have hint how others doing" value={newReplies} onChange={onNewRepliesChange}></textarea>
      <button type="submit">send happy thought</button>
    </form>
  )
}