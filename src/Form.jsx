import { useState } from "react";

const Form = ({ setThoughts }) => {
	const [message, setMessage] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();

		// Send the message to the server using a POST request
		fetch("https://project-happy-thoughts-api-ambk.onrender.com/thoughts", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ message }),
		})
			.then((res) => {
				if (!res.ok) {
					throw new Error("Failed to post new thought");
				}
				return res.json();
			})
			.then((data) => {
				console.log("API Response:", data);

				const newThought = data.response;

				if (newThought && newThought._id && newThought.hearts !== undefined) {
					setThoughts((prevThoughts) => [newThought, ...prevThoughts]);
					setMessage("");
				} else {
					console.error("Invalid response structure:", data);
				}
			})
			.catch((error) => {
				console.error("Error submitting thought:", error);
			});
	};

	const handleKeyDown = (event) => {
		if (event.key === "Enter" && !event.shiftKey) {
			event.preventDefault();
			handleSubmit(event);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<h2>What's making you happy right now?</h2>
			<textarea
				value={message}
				onChange={(e) => setMessage(e.target.value)}
				onKeyDown={handleKeyDown}
				placeholder="Write a happy thought"
				required
				minLength="5"
				maxLength="140"
				rows="3"
			/>
			<button type="submit" className="submit">❤️ Send Happy Thought ❤️</button>
		</form>
	);
};

export default Form;
