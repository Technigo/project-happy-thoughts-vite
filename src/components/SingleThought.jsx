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
}
