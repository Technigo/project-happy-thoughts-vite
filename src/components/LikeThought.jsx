import { useEffect, useState } from 'react'
import { GetThoughts } from './Thoughts'
import './Thoughts.css'

export const LikeThoughts = ({ thoughts }) => {
	const [thoughts, setThoughts] = useState([])
	const [hearts, setHearts] = useState([])

	const handleLike = (id) => {
		// Send request to API to increase likes for thoughtId
		useEffect(() => {
			fetch(`https://happy-thoughts-api.com/thoughts/${id}/like`, {
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
		}, [])
	}

	return (
		<div>
					<p>
						<button
							onClick={() => handleLike(thought._id)}
							className="heart-button">
							❤️
						</button>{' '}
						x {thought.hearts}
					</p>
				</div>
		</div>
  )
}

// Make sure you have all the necessary pieces (dependencies) in the right place.
// Use the right tools (functions) in the right places to do the right things.
// Make sure you're looking in the right place (API endpoint) to get the information you need.
