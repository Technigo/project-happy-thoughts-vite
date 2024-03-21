import { useState, useEffect } from 'react'
import { LikeThoughts } from './LikeThought'
import './GetThoughts.css'

//Functional component to link to app.jsx with
export const GetThoughts = () => {
	const [thoughts, setThoughts] = useState([])
	const [isLoading, setIsLoading] = useState(false)

useEffect(() => {
        console.log('thoughts', thoughts)
    }, [thoughts]);


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

