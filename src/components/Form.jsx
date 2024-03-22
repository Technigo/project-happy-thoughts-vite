import { useEffect, useState } from "react"
import "../styling/form.css"

export const Form = ({ newThought, fetchData, apiURL }) => {
	const [newPost, setNewPost] = useState("")
	const [errorMsg, setErrorMsg] = useState("")

	//set error message if message exceeds 140 characters
	useEffect(() => {
		if (newPost.length >= 141) {
			setErrorMsg("Your message is too long. Keep your happy thoughts shorter.")
		} else {
			setErrorMsg("")
		}
	}, [newPost])

	//Error message for too short texts
	const handleFormSubmit = async (event) => {
		event.preventDefault()

		if (newPost.length <= 4) {
			setErrorMsg(
				"Your thought is too short. Write something that has at least 5 characters."
			)
		} else if (newPost.length >= 141) {
			setErrorMsg("")
		} else {
			const option = {
				method: "POST",
				body: JSON.stringify({
					message: `${newPost}`,
				}),
				headers: { "Content-Type": "application/json" },
			}

			// checking if the thought meets the requirements to pass, else it throws an error.
			try {
				const response = await fetch(apiURL, option)
				if (!response.ok) {
					throw new Error(`Error: ${response.status}`)
				}
				const data = await response.json()
				if (!("message" in data)) {
					throw new Error("Invalid response format from server")
				}

				// Call the newThought function (passed as a prop) with the parsed data.
				newThought(data)
				// Reset newPost to an empty string, clearing the textarea.
				setNewPost("")
				// Call the fetchData function (passed as a prop) to re-fetch posts.
				fetchData()
			} catch (error) {
				console.error(error)
			}
		}
	}

	//Including counter for the post length
	return (
		<div className='form-wrapper'>
			<h2>What is making you happy right now?</h2>
			<form onSubmit={handleFormSubmit}>
				<textarea
					name='happy-thought'
					rows='5'
					cols='32'
					value={newPost}
					placeholder='Write your happy thought here..'
					onChange={(event) => setNewPost(event.target.value)}></textarea>
				<div className='post-length'>
					<p
						className='counter'
						id={`length ${newPost.length >= 140 ? "red" : ""}`}>
						{newPost.length}/140
					</p>
					<p className='error-message'>{errorMsg}</p>
				</div>
				<button type='submit' className='submit-btn'>
					<span>❤️ </span>
					Send Happy Thought
					<span> ❤️</span>
				</button>
			</form>
		</div>
	)
}
