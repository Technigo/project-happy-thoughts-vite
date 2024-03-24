import { useEffect, useState } from 'react'
import { GetThoughts } from './Thoughts'

export const LikeThoughts = () => {
	const [thoughts, setThoughts] = useState([])

	useEffect(() => {
		// Fetch thoughts from the API
		fetch('https://happy-thoughts-api.com/thoughts')
			.then((response) => response.json())
			.then((data) => setThoughts(data))
      .catch((error) => console.error('Error fetching thoughts:', error))
	}, []) //should I add dependency?

	const handleLike = (thoughtId) => {
    console.log('Button clicked for thought ID:', thoughtId)
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
					<p>
						<button
							onClick={() => handleLike(thought._id)}
							className="heart-button">
							❤️
						</button>{' '}
						x {index.hearts}
					</p>
				</div>
			))}
		</div>
	)
}


// Make sure you have all the necessary pieces (dependencies) in the right place.
// Use the right tools (functions) in the right places to do the right things.
// Make sure you're looking in the right place (API endpoint) to get the information you need.
