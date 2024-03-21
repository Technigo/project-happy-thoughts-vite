import React from 'react'
import { GetThoughts } from './components/GetThoughts'
import { LikeThoughts } from './components/LikeThought'
import { PostThoughts } from './components/PostThoughts'

const handleFormSubmit = (event) => {
	event.preventDefault()
}

export const App = () => {
	return (
		<div>
			<h1>Happy Thoughts</h1>
			<PostThoughts />
			<GetThoughts />
	
		</div>
	)
}
