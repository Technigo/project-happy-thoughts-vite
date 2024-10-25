import React, { useState } from "react";

const timeAgo = (timestamp) => {
	const now = new Date();
	const secondsDifference = Math.floor((now - new Date(timestamp)) / 1000);

	//convert a given time difference
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
	const [clickedIds, setClickedIds] = useState([]);

	// Function for liking a thought
	const handleLike = (id) => {
		fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${id}/like`, {
			method: "POST",
		})
			.then((res) => res.json())
			.then((updatedThought) => {

				if (updatedThought.hearts !== undefined && updatedThought.hearts !== null) {

					setThoughts((prevThoughts) =>
						prevThoughts.map((thought) =>
							thought._id === updatedThought._id
								? { ...thought, hearts: updatedThought.hearts }
								: thought
						)
					);


					setClickedIds((prevIds) => [...prevIds, id]);
				}
			})
			.catch((error) => {
				console.error("Error updating likes:", error);
			});
	};

	return (
		<div>
			{/* Loop over each thought and show it */}
			{thoughts.map((thought) => (
				<div key={thought._id} className="message">
					<p>{thought.message}</p>
					<p className="time">{timeAgo(thought.createdAt)}</p>
					<div className="heart-container">
						<button
							className={`heart-button ${clickedIds.includes(thought._id) ? "clicked" : ""}`}
							onClick={() => handleLike(thought._id)}>
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
