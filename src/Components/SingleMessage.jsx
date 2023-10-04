/* eslint-disable react/prop-types */
export const SingleMessage = ({ message }) => {
    
    return (
        <div className="single-message" key={message.id}>
            <p>{message.message}</p>
            <p>{message.hearts}</p>
            <p>{message.createdAt}</p>
        </div>
    )
}
