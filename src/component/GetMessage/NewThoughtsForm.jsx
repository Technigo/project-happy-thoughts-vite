export const NewThoughtsForm = ({handleFormSubmit, newThoughts, handleInputChange})=>{
    return(
        <form onSubmit={handleFormSubmit}>
            <label aria-labelledby="text">
                <h2>What&apos;s making you happy right now?</h2>
                    <input 
                    aria-label="new thought slot"
                    aria-labelledby="new-thought-slot"
                    type="text" 
                    name="text" 
                    placeholder="Share your thought here"
                    minLength={5}
                    maxLength={140}
                    value={newThoughts} 
                    onChange={handleInputChange} 
                    id="text" />
            </label>
        <div className="submit-wrapper">
            <button >❤️ Send Happy Thought ❤️</button>
        </div>
        </form>
    )
    
}