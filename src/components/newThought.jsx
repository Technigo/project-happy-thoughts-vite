import { useState, useEffect } from "react"
import PropTypes from "prop-types"

export const NewHappyThought = ({ newMessage, fetchThought }) => {
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
        event.preventDefault();
        const options = {
            method: "POST",
            body: JSON.stringify({
                message: newThought,
            }),
            headers: { "Content-Type": "application/json" },
        }


        await fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', options)
            .then((response) => response.json())
            .then((data) => {
                newMessage(data)
                setNewThought("")
                fetchThought()
            })
            .catch((error) => console.log(error))
    }


    // Display the newThought typing field/ box on the page //
    return (
        <div>
            <h2>What made you smile today?</h2>
            <form onSubmit={handleNewThought}>
                <textarea className="MessageBox"
                    rows="5"
                    cols="50"
                    placeholder="Write your happiest thought!"
                    value={newThought}
                    onChange={(e) => setNewThought(e.target.value)}
                />
                <button className="SubmitButton" type="submit">Share Happy Thought!</button>
            </form>
            {errorMessage && <div>{errorMessage}</div>}
        </div >
    )
}

NewHappyThought.propTypes = {
    newMessage: PropTypes.func,
    fetchThought: PropTypes.func,
}

/*
POST https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts
Send a POST request with a JSON body like this:
{
  "message": "My happy thought"
}
If the request was successful and a thought was added, you'll get a response that looks like this:
{
  "_id": "123456",
  "message": "My happy thought",
  "hearts": 0,
  "createdAt": "2019-11-21T11:31:28.547Z",
  "__v": 0
}
The message you send is validated - it must be present and be between 5 and 140 characters long. If it fails these validations, you'll get a response with detailed error information, which you could use to show a friendly error to the user.
*/