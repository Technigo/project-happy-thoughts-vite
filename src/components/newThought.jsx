import { useState } from "react"

export const NewHappyThought = () => {
    const [newThought, setNewThought] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    // Function to submib new Happy Thought Post //
    const PostNewThought = async (event) => {
        event.preventDefault()
        if (newThought.length >= 140) { setErrorMessage("Oh no! Your message is too long") }
        else if (newThought.length <= 4) { setErrorMessage("Oops! Your message is too short!") }
        else {
            const messageField = {
                method: "POST",
                body: JSON.stringify({
                    message: newThought
                }),
                headers: { 'Content-Type': "application/json" },
            }
        }
        await fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/', messageField)
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error('Error:', response.statusText)
                }
            })
            .then((data) => {
                setNewThought("")
                console.log(data)
            })
            .catch(error => {
                console.error('Error fetching data:', error)
            })
    }

    // Display the newThought typing field/ box on the page //
    return (
        <div>
            <h2>What made you smile today?</h2>
            <form onSubmit={PostNewThought} />
            <textarea className="MessageBox"
                rows="5"
                cols="50"
                placeholder="Write your happiest thought!"
                value={newThought}
                onChange={(e) => setNewThought(e.target.value)}
            />
            <button className="SubmitButton" type="submit">Submit</button>
            <form />
            {errorMessage && <div>{errorMessage}</div>}
        </div>
    )
}

/*POST <https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/THOUGHT_ID/like>
When the user clicks the heart button on a thought, send a POST request (with no body) to this URL. Replace THOUGHT_ID with the _id parameter of the thought the user clicked on*/
