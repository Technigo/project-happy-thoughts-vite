//Child-component that retrieves the list of happy thoughts from the API and display them.

import "./DisplayThought.css"

export const DisplayThoughts = ({ happyThoughts, isLoading, postLike }) => {
	if (isLoading) {
		return <p>Loading thoughts...</p>;
	}


	// Function to convert the "time ago" for each thought to seconds, minutes, hours or days.
	const timeAgo = (createdAt) => {
		const now = new Date();
		const timeDifference = Math.floor((now - new Date(createdAt)) / 1000);
		if (timeDifference < 60) {
			return `${timeDifference} seconds ago`;
		} else if (timeDifference < 3600) {
			const minutes = Math.floor(timeDifference / 60);
			return `${minutes} minutes ago`;
		} else if (timeDifference < 86400) {
			const hours = Math.floor(timeDifference / 3600);
			return `${hours} hours ago`;
		} else { // More than a day
			const days = Math.floor(timeDifference / 86400);
			return `${days} days ago`;
		}
	};

	const onClick = (thought) => {
		postLike(thought._id)
	}



	return (
		<>
			<ul className="thought-list">
				{happyThoughts.map((thought) => (
					<li key={thought._id} className="thought-item">
						<div className="thought-display">
							<p>{thought.message}</p>
							<div className="info-like-container">
								<div className="like-container" onClick={() => onClick(thought)}>
									<button>❤️</button>
									<p>x {thought.hearts}</p>
								</div>
								<div className="info-container">
									<p>{timeAgo(thought.createdAt)} ago</p>
								</div>
							</div>
						</div>
					</li>
				))}
			</ul>
		</>

	);
};