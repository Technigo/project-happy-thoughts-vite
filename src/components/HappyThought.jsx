export const HappyThought = ({ message }) => {
    return (
        <div id="thought-container">
            <p>{message}</p>
        </div>
    )
}

// API for liking a post `POST <https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/THOUGHT_ID/like`>.
// Replace "THOUGHT_ID" with relevant _id parameter