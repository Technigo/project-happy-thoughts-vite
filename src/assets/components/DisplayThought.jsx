/* eslint-disable react/prop-types */
//A child-component of the MessageProvider
//The components job: it retrieves the list of happy thoughts from the context and display them.

import "./DisplayThought.css"

export const DisplayThought = ({ happyThoughts, isLoading }) => {
	if (isLoading) {
		return <p>Loading thoughts...</p>;
	}
	//Testvärde, hjärta + tid
	return (
		<ul>
			{happyThoughts.map((thought) => (
				<li key={thought._id}>{thought.message}</li>
			))}
		</ul>
	);
};
