//Child-component that handles the text-input

//The components job: contains the input field and submit button for users to type in their happy thoughts and submit them. It also uses the function provided by the MessageProvider to send a new message to the API. 

import { useState } from "react";
import "./PostThought.css";

export const PostThought = () => {
	const [handleThought, setHandleThought] = useState("")

	const handleSubmit = () => {
		console.log("Thought submitted:", handleThought);
		setHandleThought("");
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
					value={handleThought}
					onChange={(event) => setHandleThought(event.target.value)}
				/>
			</div>
			<button onClick={handleSubmit}>Send Happy Thought</button>
		</div>
	);
};