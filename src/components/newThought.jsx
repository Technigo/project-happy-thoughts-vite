import { useState, useEffect } from "react"
import PropTypes from "prop-types"

export const NewHappyThought = ({ newMessage }) => {
    const [newThought, setNewThought] = useState("")
    const [errorMessage, setErrorMessage] = useState("")


    // Use useEffect to display error messages //
    useEffect(() => {
        if (newThought.length >= 141) {
            setErrorMessage("Oh no! Your message is too long")
        } else if (newThought.length <= 4 && newThought.length > 0) {
            setErrorMessage("Oops! Your message is too short!")
        } else {
            setErrorMessage("")
        }
    }, [newThought])

    // Function to submit new Happy Thought Post //
    const handleNewThought = async (event) => {
        event.preventDefault()
        const options = {
            method: "POST",
            body: JSON.stringify({
                message: newThought,
            }),
            headers: { "Content-Type": "application/json" },
        }

        await fetch('https://mc-happy-thoughts-api.onrender.com/thoughts', options)
            .then((response) => response.json())
            .then((data) => {
                newMessage(data)
                setNewThought("")
            })
            .catch((error) => console.log(error))
    }


    // Display the newThought typing field/ box on the page //
    return (
        <div>
            <h2>What made you smile today?</h2>
            <form onSubmit={handleNewThought}>
                <textarea
                    className="messageBox"
                    rows="5"
                    cols="50"
                    placeholder="Write your happiest thought!"
                    value={newThought}
                    onChange={(e) => setNewThought(e.target.value)}
                />
                <div className="errorMessage">{errorMessage && <div>{errorMessage}</div>}</div>
                <div>
                    <button className="button-Container">
                        <span className="submitButton" type="submit">
                            ❤️ Share Happy Thought! ❤️
                        </span>
                    </button>
                </div>
            </form>
        </div>
    )
}


NewHappyThought.propTypes = {
    newMessage: PropTypes.func,
}
