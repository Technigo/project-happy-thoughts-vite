export const RepliesList = ({repliesProp}) => {
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
        <ul>
            {repliesProp?.map((reply, index) => (
                <li key={reply._id} style={repliesBox}>{reply.message}</li>
            ))}
        </ul>
        )
}