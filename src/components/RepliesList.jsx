import { formatDistance } from 'date-fns'

export const RepliesList = ({repliesProp, onIncreaseHeart, newThoughtAdded}) => {
    const repliesBox = {
        border: '1px solid #ddd',
        padding: '10px',
        margin: '10px 0',
        borderRadius: '5px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        backgroundColor: '#f9f9f9'
    }
    if (!repliesProp) {
        return <p>Loading happy thoughts...</p>
    }
    return (
        <div>
        <ul>
            {repliesProp?.map((reply, index) => (
                <div
                key={reply._id}
                style={
                  newThoughtAdded && index === 0
                    ? {
                        opacity: 0,
                        transition: 'opacity 0.5s',
                        animation: 'fadeIn 0.5s forwards'
                      }
                    : {}
                }
              >
                <li style={repliesBox}>
                  {reply.message}
                  <button onClick={() => onIncreaseHeart(reply._id, reply.message)}>❤️</button>✕{reply.hearts}
                  <p>
                    {console.log(reply.createdAt)}
                    {formatDistance(new Date(reply.createdAt), Date.now(), { addSuffix: true })}</p>
                </li>
              </div>
            ))}
        </ul>
        </div>
        )
}