//Child-component that retrieves the list of happy thoughts from the API and display them.

import "./DisplayThought.css"

export const DisplayThought = ({ happyThoughts, isLoading }) => {
	if (isLoading) {
		return <p>Loading thoughts...</p>;
	}

	//Lägga in en funktion som mappar över arrayn i apin och tar fram värdet för hur många likes + tiden för meddelandet? - behöver det vara en separat komponent?

	return (
		<>
			<div className="thought-container">
				<ul className="thought-list">
					{happyThoughts.map((thought) => (
						<li key={thought._id} className="thought-item">
							<div className="thought-display">
								{thought.message}
								<div className="info-like-container">
									<div className="like-container">
										<button>❤️</button>
										<p>x 0</p>
									</div>
									<div className="info-container">
										<p>...seconds ago</p>
									</div>
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		</>
	);
};