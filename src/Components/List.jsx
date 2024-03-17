export const List = ({ list, formatDate, handleNewLike }) => {
  return (
    <div className="listWrapper">
      {list.map((thought) => (
        <div key={thought._id}>
          <h2>{thought.message}</h2>
          <button onClick={() => handleNewLike(thought._id)}>❤️</button>
          <span>x{thought.hearts}</span>
          <p>Created on {formatDate(thought.createdAt)}</p>
        </div>
      ))}
    </div>
  )
}
