import { useEffect, useState } from "react"

export const SingleThought = ({ eachThought, onLikeChange }) => {
	const [like, setLike] = useState(false)
	const [numberLikes, setNumberLikes] = useState(eachThought.hearts)

	const LIKE_API = `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${eachThought._id}/like`

	useEffect(() => {
		const likedThought = JSON.parse(localStorage.getItem("likedThought")) || []
		if (likedThought.includes(eachThought._id)) {
			setLike(true)
		}
	}, [eachThought._id])

	const toggleLike = async () => {
		if (!like) {
			const option = {
				method: "POST",
				headers: { "Content-Type": "application/json" },
			}
		}
		try {
			const response = await fetch(LIKE_API, option)

			if (response.ok) {
				const updateLikes = numberLikes + 1
				setNumberLikes(updateLikes)
				setLike(true)
				onLikeChange(1)
			} else {
				const responseData = await response.json()
				console.error("Error to like thought", response.status)
				console.error("Response data:", responseData)
			}
		} catch (error) {
			console.error("An unexpected error occured", error)
		}
	}

	return (
		<div className='single-thought'>
			<p>{eachThought.message}</p>
			<div className='like-time-container'>
				<div>
					<button onClick={toggleLike}>&#9825;</button>
					<p>x {numberLikes}</p>
				</div>
				<p key={eachThought._id}>TIME</p>
			</div>
		</div>
	)
}
