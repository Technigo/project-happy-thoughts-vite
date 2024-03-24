import { ThoughtsForm } from './ThoughtsForm';
import { ThoughtsList } from './ThoughtsList';
import { useEffect, useState } from 'react';
import "./Thoughts.css";

export const Thoughts = () => {
	const [thoughtList, setThoughtList] = useState([]);
	const [loading, setLoading] = useState(false);
	const [newThought, setNewThought] = useState("");
	// set the initial state of the thought list to an empty array
	// set the initial state of the loading state to false
	// set the initial state of the new thought to an empty string
	// define the API URL
	const API = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

	const fetchThoughts = async () => {
		// set the loading state to true while the thoughts are being fetched
		setLoading(true);
		try {
			// fetch the API
			const response = await fetch(API);
			if (response.ok) {
				const thoughts = await response.json();
				// set the thought list with the fetched thoughts
				setThoughtList(thoughts);
			}
		} catch (error) {
			console.error(error);
		} finally {
			// set the loading state to false after the thoughts have been fetched
			setLoading(false);
		}
	}
	// fetch the thoughts from the API
	const handleNewThought = (newThought) => {
		setNewThought(newThought.target.value);
		// set new thought from the value of the input field
	}

	const onThoughtSubmit = async (event) => {
		// prevent the default form submission
		event.preventDefault();
		if (newThought.trim().length < 10) {
			// display an alert if the thought is less than 10 characters long
			alert("Thought must be at least 10 characters long");
			return;
		}
		// create a new thought object with the message property
		const newThoughtObject = {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ message: newThought }),
		}
		try {
			// fetch the API with the new thought object
			const response = await fetch(API, newThoughtObject);
			if (response.ok) {
				// fetch the thoughts after a new thought has been submitted
				await fetchThoughts();
			}
		}
		catch (error) {
			console.log(error);
		}
		finally {
			// reset the new thought state to an empty string after the thought has been submitted
			setNewThought("");
		}
	}
	// fetch the thoughts after a new thought has been submitted
	useEffect(() => {
		fetchThoughts();
	}, []);



	return (
		<div className="wrapper">
			{/* pass the newThought, handleNewThought, and onThoughtSubmit props to the ThoughtsForm component */}
			<ThoughtsForm
				newThought={newThought}
				onThoughtChange={handleNewThought}
				onThoughtSubmit={onThoughtSubmit}
			/>
			{/* pass the loading, thoughtList, and setThoughtList props to the ThoughtsList component */}
			<ThoughtsList
				loading={loading}
				thoughtList={thoughtList}
				setThoughtList={setThoughtList}
			/>
		</div>
	)
}



