

export const SingleThought = ({message,hearts,createdAt})=>{
    return (
        <div>
            <p>{message}</p>
            <p>{hearts}</p>
            <p>{createdAt}</p>
        </div>
    )


}