import { useState, useEffect } from 'react'
import './LikeThoughts.css'
import { GetThoughts } from './Thoughts'

//Functional component to link to app.jsx with
export const LikeThoughts = (thoughts, setThoughts) => {
	const [likeThoughts, setLikeThoughts] = useState([])
	// const [error, setError] = useState('')

	//fetch the data from API 
	useEffect(() => {
		const handleLike = (index._id)
		fetch(
			`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${index._id}/like`,
			{
				method: 'POST',
			}
		)
			.then((data) => data.json())
			.then((updatedThought) => {
				console.log(data)
				setThoughts(
					thoughts.map((index) =>
						index._id === updatedIndex._id ? updatedIndex : thought
					)
				)
				setLikedThoughtIds([...likedThoughtIds, updatedThought._id])
				setUniqueLikedCount((prevCount) => prevCount + 1)
			})
			// .catch((error) => console.error('Error liking thought', error))
}
},[])
