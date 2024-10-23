//Parent component that fetches the data from the API

//Components job: It is responsible for fetching the data from the API and managing the state of that data. Its job is to provide the data to child components, and not to display it directly.


import { useState, useEffect } from 'react'
import { MessageProvider } from "./MessageProvider.jsx"
// import { PostThought } from "./PostThought.jsx";
// import { DisplayThought } from "./DisplayThought.jsx"

const BASE_URL = "https:happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

export const MessageFetcher = () => {
	const [happyThoughts, setHappyThoughts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchHappyThoughts = async () => {
			try {
				const response = await fetch(BASE_URL);
				const data = await response.json();
				setHappyThoughts(data);
			} catch (error) {
				console.error("Error fetching data:", error);
			} finally {
				setIsLoading(false);
			}
		};
		fetchHappyThoughts();
	}, []);

	return (
		<>
			<MessageProvider happyThoughts={happyThoughts} isLoading={isLoading} />
		</>

	);
	;
}







