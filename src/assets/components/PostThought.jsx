//Child-component that handles the text-input

//The components job: contains the input field and submit button for users to type in their happy thoughts and submit them. It also uses the function provided by the MessageProvider to send a new message to the API. 

import { useState } from "react";
import "./PostThought.css";

export const PostThought = ({ happyThoughts, setHappyThoughts }) => {
	console.log("happyThoughts", happyThoughts)
	const BASE_URL = "https:happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

	const [thought, setThought] = useState("")

	//handles the submit of the thought
	const handleSubmit = () => {
		console.log("Thought submitted:", thought);
		setThought("");
		postHappyThought();
	};

	// Posts the thought to the API
	const postHappyThought = async () => {
		try {
			const response = await fetch(BASE_URL, {
				method: "POST",
				body: JSON.stringify({
					message: thought,
				}),
				headers: { "Content-Type": "application/json" },
			});
			const data = await response.json();
			console.log("data", data)
			const newThought = data;
			setHappyThoughts((previousThoughts) => [newThought]);

		} catch (error) {
			console.error("Error posting data:", error);
		}
	};

	return (
		<div className="post-container">
			<div className="question-container">
				<h1>What is making you happy right now?</h1>
			</div>
			<div className="input-container">
				<input
					type="text"
					placeholder="Im happy because..."
					value={thought}
					onChange={(event) => setThought(event.target.value)}
				/>
			</div>
			<button onClick={handleSubmit}>Send Happy Thought</button>
		</div>
	);
};