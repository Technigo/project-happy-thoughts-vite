import PropTypes from "prop-types"

export const ThoughtsForm = ({ newThought, setNewThought, handleFormSubmit }) => {
    return (
        <form onSubmit={handleFormSubmit}>
            <input
                type="text"
                value={newThought}
                onChange={(e) => setNewThought(e.target.value)} placeholder="Type here...">
            </input>
            <button type="submit">Submit</button>
        </form>
    )
}

// Props Validation

ThoughtsForm.propTypes = {
    newThought: PropTypes.string.isRequired,
    setNewThought: PropTypes.func.isRequired,
    handleFormSubmit: PropTypes.func.isRequired,
}