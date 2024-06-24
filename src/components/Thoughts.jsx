import { useState, useEffect } from 'react'
import { LikeThoughts } from './LikeThought'
import moment from 'moment'
import './Thoughts.css'

//Functional component to link to app.jsx with
export const GetThoughts = () => {
	const [thoughts, setThoughts] = useState(null)
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState('')

	//fetch the data from API
	useEffect(() => {
		//need of a thing that shows loading
		setIsLoading(true)
		fetch('https://sofies-happy-thoughts-api.onrender.com/thoughts')
			.then((data) => data.json())
			.then((data) => {
				console.log(data.response)
				setThoughts(data.response)
				setIsLoading(false)
			})
	}, [])
	//fixa error här
	const handleFormSubmit = (event) => {
		event.preventDefault()
	}

	//filtrera ut det som ska visas
	return (
		<>
		<PostThoughts setThoughts={setThoughts} />
			{thoughts &&
				thoughts.map((index) => (
					<div key={index._id} className="thoughts-wrapper">
						<p>{index.message}</p>
						<p className="time">{moment(index.createdAt).fromNow()}</p>
						<LikeThoughts index={index} />
					</div>
				))}
		</>
	)
}

//Functional component to link to app.jsx with
export const PostThoughts = ({setThoughts}) => {
	const [newThought, setNewThought] = useState('')
	const [inputReady, setInputReady] = useState(false)
	const [error, setError] = useState('')

	//fetch the data from API
	// useEffect(() => {

	// }, [newThought, inputReady])

	const handleSubmit = (event) => {
		event.preventDefault()
		if (newThought.length < 5 || newThought.length > 140) {
			setError(
				'Please typ something with at least 5 letters and with the most 140 letters'
			)
		} else if (newThought !== '') {
			fetch('https://sofies-happy-thoughts-api.onrender.com/thoughts', {
				method: 'POST',
				body: JSON.stringify({
					message: newThought,
				}),
				headers: { 'Content-Type': 'application/json' },
			})
				.then((data) => data.json())
				.then((newThought) => {
					// Now you have `newThought` which is the response from the
					// API as documented at the top of this readme. You can use
					// it to update the `thoughts` array:
					// setThoughts((previousThoughts) => [newThought, ...previousThoughts])
					setThoughts(prevValue => [newThought.response,...prevValue])
					setInputReady(false)
					setNewThought('')
				})
			//fixa error här
		}
	}

	return (
		<div className="input-wrapper">
			<label>What is making you happy right now?</label>
			<form onSubmit={handleSubmit}>
				<input
					className="input-field"
					type="text"
					placeholder=" p o s i t i v e   v i b e s   h e r e !"
					value={newThought}
					onChange={(e) => setNewThought(e.target.value)}
				/>
				<button className="submit-btn" type="submit">
					❤️
				</button>
			</form>
		</div>
	)
}
