import { useEffect, useState } from 'react'

export const LikeThoughts = () => {
	const [thoughts, setThoughts] = useState([])

	useEffect(() => {
		// Fetch thoughts from the API
		fetch('https://happy-thoughts-api.com/thoughts')
			.then((response) => response.json())
			.then((data) => setThoughts(data))
			.catch((error) => console.error('Error fetching thoughts:', error))
	}, [])

	const increaseLikes = (thoughtId) => {
		// Send request to API to increase likes for thoughtId
		fetch(`https://happy-thoughts-api.com/thoughts/${thoughtId}/like`, {
			method: 'POST',
		})
			.then((response) => response.json())
			.then((updatedThought) => {
				// Update thoughts state with the updated thought
				setThoughts((prevThoughts) =>
					prevThoughts.map((thought) =>
						thought._id === updatedThought._id ? updatedThought : thought
					)
				)
			})
			.catch((error) => console.error('Error increasing likes:', error))
	}

	return (
		<div>
			{thoughts.map((thought) => (
				<div key={thought._id}>
					<p>{thought.message}</p>
					<p>Likes: {thought.hearts}</p>
					<button onClick={() => increaseLikes(thought._id)}>Like</button>
				</div>
			))}
		</div>
	)
}
