import './newThoughtForm.css';

export const NewThoughtsForm = ({handleFormSubmit, newThoughts, handleInputChange})=>{
    return(
        <div  className="new-thought-wrapper" aria-label="Your new thought">
        <form  onSubmit={handleFormSubmit}>
            <label aria-labelledby="text">
                <h4>What&apos;s making you happy right now?</h4>
            </label>
                <textarea 
                type='text'
                name="text" 
                id="text" 
                cols={30} 
                rows={10} 
                onChange={handleInputChange}
                value={newThoughts} 
                placeholder="Share your thought here">
                </textarea>
        <div className="submit-wrapper">
            <button className="submit-button">
                <span className='send-button'>❤️ Send Happy Thought ❤️</span>
            </button>
        </div>
        </form>
        </div>
    )
    
}