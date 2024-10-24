//Child-component that contains the input field and submit button for users to type in their happy thoughts and submit them. 

import "./PostThought.css";

export const PostThought = ({ thought, postHappyThought, setThought }) => {
	console.log("postHappyThought", postHappyThought)

	// handles the submit of the thought
	const handleSubmit = () => {
		postHappyThought();
		setThought("");
	};

	return (
		<div className="post-container">
			<div className="question-container">
				<h1>What´s making you happy right now?</h1>
			</div>
			<div className="input-container">
				<input
					type="text"
					placeholder="Im happy because..."
					value={thought}
					onChange={(event) => setThought(event.target.value)}
				/>
			</div>
			<button onClick={handleSubmit}>❤️ Send Happy Thought ❤️</button>
		</div>
	);
};