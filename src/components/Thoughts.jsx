import { useState, useEffect } from 'react'
import { LikeThoughts } from './LikeThought'
import './Thoughts.css'

//Functional component to link to app.jsx with
export const GetThoughts = () => {
	const [thoughts, setThoughts] = useState([])
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		console.log('thoughts', thoughts)
	}, [thoughts])

	//fetch the data from API
	useEffect(() => {
		//need of a thing that shows loading
		setIsLoading(true)
		fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts')
			.then((response) => response.json())
			.then((data) => {
				console.log(data)
				setThoughts(data)
				setIsLoading(false)
			})
	}, [])
	//add a catch for errors later. Also fix the empty array for the useEffect.
	const handleFormSubmit = (event) => {
		event.preventDefault()
	}

	//filtrera ut det som ska visas
	return (
		<>
			{thoughts.map((index) => (
				<div key={index._id} className="thoughts-wrapper">
					<p>{index.message}</p>
					<p>
						<button className="heart-button">❤️</button> x {index.hearts}
					</p>
					{/* här ska jag lägga in data från en komponent som omvandlar tid */}
					<p>{index.createdAt}</p>
				</div>
			))}
		</>
	)
}

//Functional component to link to app.jsx with
export const PostThoughts = () => {
	const [newThought, setNewThought] = useState('')
	const [inputReady, setInputReady] = useState(false)
  const [error, setError] = useState ('')

	//fetch the data from API
	useEffect(() => {
		if (inputReady === true) {
			fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', {
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
					setInputReady(false)
					setNewThought('')
				})
				.catch((error) => {
					console.log('Error posting thought', error)
				})
		}
	}, [newThought, inputReady])

	const handleSubmit = (event) => {
		if (newThought.length < 5 || newThought.length < 140 ) {
      setError ('Please typ something with at least 5 letters and with the most 140 letters')
    }
		event.preventDefault()
		if (newThought !== '') {
			setInputReady(true)
		}
	}

	return (
		<div className="input-wrapper">
			<label>What is making you happy right now?</label>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={newThought}
					onChange={(e) => setNewThought(e.target.value)}
				/>
				<button type="submit">send</button>
			</form>
		</div>
	)
}
