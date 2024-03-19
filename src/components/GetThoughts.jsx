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
	})
	//add a catch for errors later. Also fix the empty array for the useEffect.
}

return <div>
	
	</div>
