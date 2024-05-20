import React from 'react'
import { GetThoughts } from './components/Thoughts'
import { LikeThoughts } from './components/LikeThought'

const handleFormSubmit = (event) => {
	event.preventDefault()
}

export const App = () => {
	return (
		<div>
			<h1>Happy Thoughts</h1>
			<GetThoughts />
		</div>
	)
}