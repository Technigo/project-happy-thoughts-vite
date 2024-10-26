import PropTypes from "prop-types"
import "./form.css"
import { SubmitButton } from "./submitButton/SubmitButton"

export const ThoughtsForm = ({ newThought, setNewThought, handleFormSubmit }) => {
    return (
        <>
            <div className="form-container">
                <p>What is making you happy right now?</p>
                <form onSubmit={handleFormSubmit}>
                    <textarea
                        type="text"
                        value={newThought}
                        onChange={(e) => setNewThought(e.target.value)}
                        placeholder="Type here..."
                        maxLength="140">
                    </textarea>
                    <section className="submit-button-container">
                        <SubmitButton />
                        {/* <button type="submit">Submit</button> */}
                    </section>
                </form>
            </div>

        </>
    )
}

// Props Validation

ThoughtsForm.propTypes = {
    newThought: PropTypes.string.isRequired,
    setNewThought: PropTypes.func.isRequired,
    handleFormSubmit: PropTypes.func.isRequired,
}