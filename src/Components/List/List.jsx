import './list.css'
export const List = ({ list, formatDate, handleNewLike }) => {
  return (
    <div className="listWrapper">
      {list.map((thought) => (
        <div className="thoughtContainer" key={thought._id}>
          <h2 className="message fadeIn">{thought.message}</h2>
          <div className="dateWrapper">
            <div className="likesWrapper">
              <button
                className={thought.hearts > 0 ? 'likeBtn' : 'noLikesBtn'}
                onClick={() => handleNewLike(thought._id)}
              >
                ❤️
              </button>
              <span className="likesNumber">x{thought.hearts}</span>
            </div>
            <p className="dateCreationThought">
              {formatDate(thought.createdAt)}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
