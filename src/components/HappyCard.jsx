export const HappyCard = ({_id, message, hearts, timeSinceCreated }) => {

  return (
    <div className="card" key={_id}>
      <h2>{message}</h2>
      <div className="heart-and-time">
        <div className="heart-and-likes">
          <button className="heart">🧡</button>
          <h3>x  {hearts}</h3> 
        </div>
        <h3 className="created-at">{timeSinceCreated}</h3>
      </div>
    </div>
  )
}
