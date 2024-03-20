import { useState, useEffect } from 'react'

//Functional component to link to app.jsx with
export const GetThoughts = () => {
	const [thoughts, setThoughts] = useState([])
	const [isLoading, setIsLoading] = useState(false)

	//fetch the data from API
	useEffect(() => {
		//need of a thing that shows loading
		setIsLoading(true)
		fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts')
			.then((response) => response.json())
			.then((data) => {
				setThoughts(data)
				setIsLoading(false)
				console.log(data)
			})
	}, [])
	//add a catch for errors later. Also fix the empty array for the useEffect.

	//filtrera ut det som ska visas
	return (
		<>
			{thoughts.map((index) => (
				<div key={index._id}>
					<p>{index.message}</p>
					{/* här ska jag lägga in en hjärtknapp som jag hämtar in från en annan komponent */}
					<p>❤️ x {index.hearts}</p>
          {/* här ska jag lägga in data från en komponent som omvandlar tid */}
					<p>{index.createdAt}</p>
				</div>
			))}
		</>
	)
}
