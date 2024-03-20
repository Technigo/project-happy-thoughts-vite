import { useEffect, useState } from "react"
import "./styling/form.css"

export const Form = ({ newThought, fetchData, url }) => {
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

			try {
				const response = await fetch(url, option)
				const data = await response.json()

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
			<h3>What is making you happy right now?</h3>
			<form onSubmit={handleFormSubmit}>
				<textarea
					name='happy-thought'
					rows='5'
					value={newPost}
					placeholder='Write your happy thought here..'
					onChange={(event) => setNewPost(event.target.value)}></textarea>
				<div className='post-length'>
					<p className='error-message'>{errorMsg}</p>
					<p className={`length ${newPost.length >= 140 ? "red" : ""}`}>
						{newPost.length}/140
					</p>
				</div>
				<button type='submit' className='submit-btn'>
					<span>:heart:</span>
					Send Happy Thought
					<span>:heart:</span>
				</button>
			</form>
		</div>
	)
}
