import { useEffect, useState } from "react"
import moment from "moment"
import "../styling/thought.css"

export const SingleThought = ({ eachThought, onLikeChange }) => {
	const [like, setLike] = useState(false)
	const [numberLikes, setNumberLikes] = useState(eachThought.hearts)

	const LIKE_API = `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${eachThought._id}/like`

	useEffect(
		() => {
			const likedThought =
				JSON.parse(localStorage.getItem("likedThought")) || []
			if (likedThought.includes(eachThought._id)) {
				setLike(true)
			}
		},
		[eachThought._id],
		like
	)
	//CHECK THIS CODE!! Something is not right here.
	const toggleLike = async () => {
		const option = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
		}
		try {
			const response = await fetch(LIKE_API, option)

			if (response.ok) {
				const updateLikes = numberLikes + 1
				setNumberLikes(updateLikes)
				setLike((prevLike) => !prevLike)
				onLikeChange(1)
			} else {
				const responseData = await response.json()
				console.error("Error to like thought", response.status)
				console.error("Response data:", responseData)
			}
		} catch (error) {
			console.error("An unexpected error occurred", error)
		}
	}
	const handleDate = (date) => {
		const newDate = new Date(date)
		return moment(newDate).fromNow()
	}

	return (
		<div className='single-thought'>
			<p>{eachThought.message}</p>
			<div className='like-time-container'>
				<div className='btn-count-container'>
					<button
						className={`heart-btn ${like ? "liked" : ""}`}
						onClick={toggleLike}>
						❤️
					</button>
					<p>x {numberLikes}</p>
				</div>
				<p key={eachThought._id}>{handleDate(eachThought.createdAt)}</p>
			</div>
		</div>
	)
}
