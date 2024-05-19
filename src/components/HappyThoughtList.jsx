import { formatDistanceToNow } from "date-fns"
import { HappyThoughtLikes } from "./HappyThoughtLikes"

export const HappyThoughtList = ({ thoughts }) => {
  const limitPosts = thoughts.slice(0, 20)

  return (
    <section className="thought-section">
      {limitPosts.map((thought) => (
        <div className="thought-wrapper" key={thought._id}>
          <div className="input-message">{thought.message}</div>
          <div className="info-wrapper">
            <HappyThoughtLikes id={thought._id} hearts={thought.hearts} />
            <div className="time">
              {formatDistanceToNow(new Date(thought.createdAt), {
                addSuffix: true,
              }).slice(0, 20)}
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
