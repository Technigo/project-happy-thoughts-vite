export const RepliesList = ({repliesProp}) => {
    if (!repliesProp) {
        return <p>Loading happy thoughts...</p>
    }
    // const cleanReplies = repliesProp.message
    return (
        // ${cleanReplies}
        <ul>
            {repliesProp?.map((reply, index) => (
                <li key={reply._id}>{reply.message}</li>
            ))}
        </ul>
        )
}