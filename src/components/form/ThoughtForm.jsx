import PropTypes from "prop-types"
import "./form.css"

export const ThoughtsForm = ({ newThought, setNewThought, handleFormSubmit }) => {
    return (
        <div className="form-container">
            <p>What is making you happy right now?</p>
            <form onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    value={newThought}
                    onChange={(e) => setNewThought(e.target.value)} placeholder="Type here...">
                </input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

// Props Validation

ThoughtsForm.propTypes = {
    newThought: PropTypes.string.isRequired,
    setNewThought: PropTypes.func.isRequired,
    handleFormSubmit: PropTypes.func.isRequired,
}