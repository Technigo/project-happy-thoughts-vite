/* eslint-disable react/no-unescaped-entities */

export const MessageForm = () => {
    return (
        <div className="new-message-wrapper">
            <h2>What&apos;'s making you happy right now?</h2>
            
            <form>
                <textarea rows="3" placeholder="Type in something that makes you happy..."></textarea>
                <div className="message-length">
                    some function
                </div>
                <button 
                    type="submit"
                    // onClick={submit}
                    className="submit-button"
                    aria-label="button for posting the message"
                >
                    <span className="heart-emoji" aria-label="button for posting the message">❤️</span>
                        Send Happy Thoughts
                    <span className="heart-emoji" aria-label="button for posting the message">❤️</span>
                </button>
            </form>
        </div>
  )
}
