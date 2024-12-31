import { useState } from "react";

const timeAgo = (timestamp) => {
	const now = new Date();
	const secondsDifference = Math.floor((now - new Date(timestamp)) / 1000);

	const units = {
		year: 60 * 60 * 24 * 365,
		month: 60 * 60 * 24 * 30,
		week: 60 * 60 * 24 * 7,
		day: 60 * 60 * 24,
		hour: 60 * 60,
		minute: 60,
		second: 1,
	};

	for (let [unit, secondsInUnit] of Object.entries(units)) {
		const amount = Math.floor(secondsDifference / secondsInUnit);
		if (amount >= 1) {
			return `${amount} ${unit}${amount > 1 ? "s" : ""} ago`;
		}
	}

	return "just now";
};

const Thoughts = ({ thoughts, setThoughts }) => {
	// Function for liking a thought
	const handleLike = (id) => {
		fetch(`https://project-happy-thoughts-api-ambk.onrender.com/thoughts/${id}/like`, {
			method: "POST",
		})
			.then((res) => {
				if (!res.ok) {
					throw new Error("Failed to like thought");
				}
				return res.json();
			})
			.then((data) => {
				console.log("API Response:", data);

				const updatedThought = data.response;

				if (updatedThought.hearts !== undefined && updatedThought.hearts !== null) {
					setThoughts((prevThoughts) =>
						prevThoughts.map((thought) =>
							thought._id === updatedThought._id
								? { ...thought, hearts: updatedThought.hearts }
								: thought
						)
					);
				}
			})
			.catch((error) => {
				console.error("Error updating likes:", error);
			});
	};

	return (
		<div>
			{thoughts.map((thought) => (
				<div key={thought._id} className="message">
					<p>{thought.message}</p>
					<p className="time">{timeAgo(thought.createdAt)}</p>
					<div className="heart-container">
						<button
							className={`heart-button ${thought.hearts > 0 ? "clicked" : ""}`}
							onClick={() => handleLike(thought._id)}
						>
							<span className="heart-icon">❤️ </span>
						</button>
						<span className="hearts-count"> x {thought.hearts ?? 0} </span>
					</div>
				</div>
			))}
		</div>
	);
};

export default Thoughts;
