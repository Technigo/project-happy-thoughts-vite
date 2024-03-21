import { useState, useEffect } from 'react'
import { GetThoughts } from './GetThoughts'
import './PostThoughts.css'

//Functional component to link to app.jsx with
export const PostThoughts = () => {
	const [newThought, setNewThought] = useState("")
  const [inputReady, setInputReady] = useState(false)

	//fetch the data from API
	useEffect(() => {
    if (inputReady === true) {
		fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', {
			method: 'POST',
			body: JSON.stringify({
				message: newThought,
			}),
			headers: { 'Content-Type': 'application/json' },
		})
			.then((data) => data.json())
			.then((newThought) => {
        console.log(newThought)
				// Now you have `newThought` which is the response from the
				// API as documented at the top of this readme. You can use
				// it to update the `thoughts` array:
				// setThoughts((previousThoughts) => [newThought, ...previousThoughts])
        setInputReady(false)
        setNewThought("")
			})
    }
	}, [newThought, inputReady])

  const handleSubmit = (event) => {
  //ifs här ska det bli validering
  event.preventDefault()
  if (newThought !== "") {
  setInputReady(true)
  }


  }

	return (
		<div className="input-wrapper">
			<label>What is making you happy right now?</label>
			<form>
				<input type="text" onChange={(e) => setNewThought(e.target.value)} />
				<button onClick={handleSubmit}>send</button>
			</form>
		</div>
	)
}
