export const SingleThought = ({ thought }) => {
    const cleanThought = thought;
    return (
        <div>
            <h4>{!cleanThought ? "Loading..." : cleanThought}</h4>
        </div>
    )
}
