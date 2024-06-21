import { formatDistanceToNow } from "date-fns"
import { Likes } from "./Likes.jsx"

export const List = ({ thoughts }) => {
  return (
    <section className="thought-section">
      {thoughts.map((thought) => (
        <div className="thought-wrapper" key={thought._id}>
          <div className="input-message">{thought.message}</div>
          <div className="info-wrapper">
            <Likes id={thought._id} hearts={thought.hearts} />
            <div className="time">
              {formatDistanceToNow(new Date(thought.createdAt), {
                addSuffix: true,
              })}
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
