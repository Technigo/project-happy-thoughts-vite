import { useState, useEffect } from 'react'
import './LikeThoughts.css'

//Functional component to link to app.jsx with
export const LikeThoughts = () => {
	const [heart, setHeart] = useState([])

	//fetch the data from API (check if {index._id} is correct)
	useEffect(() => {
		fetch(
			'https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/index._id/like'
		)
			.then((response) => response.json())
			.then((data) => {
				setHeart(data)
				console.log(data)
			})
	}, [])
	//add a catch for errors later. Also fix the empty array for the useEffect.
}
