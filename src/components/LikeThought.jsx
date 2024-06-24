import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import './Thoughts.css'
import { GetThoughts } from './Thoughts'

export const LikeThoughts = ({ index }) => {
	const [likes, setLikes] = useState(index.hearts)

const handleLike = (index) => {
	// Send request to API to increase likes for thoughtId
	fetch(
		`https://sofies-happy-thoughts-api.onrender.com/thoughts/${index._id}/like`,
		{
			method: 'POST',
		}
	)
		.then((response) => {
			if (response.ok) {
				// If the request is successful, update the state to reflect the increased likes
				setLikes(likes + 1)
			} else {
				// If there's an error, log the error message
				console.error('Error increasing likes:', response.statusText)
			}
		})
		.catch((error) => console.error('Error increasing likes:', error))
}

	return (
		<div>
			<p>
				<button
					key={index._id}
					onClick={() => handleLike(index)}
					className="heart-button">
					❤️
				</button>{' '}
				x {likes}
			</p>
		</div>
	)
}

LikeThoughts.propTypes = {
	index: PropTypes.shape({
		_id: PropTypes.string.isRequired,
		hearts: PropTypes.number.isRequired,
	}).isRequired,
}
