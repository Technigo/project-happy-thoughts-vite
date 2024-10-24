// Parent component, this component is taking care of fetching the data, and render the child componets

import { useState, useEffect } from 'react'
import { DisplayThought } from "./DisplayThought"
import { PostThought } from "./PostThought"

export const ThoughtPage = () => {
	const BASE_URL = "https:happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";


	const [happyThoughts, setHappyThoughts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	//Fetching the data from the API
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

	console.log("happyToughts", happyThoughts);
	console.log("isLoading", isLoading)

	//POST-function

	//anväda testvärde i en funktion som reggar från API:n - PUT - uppdatera hjärta och tid från API. 

	return (
		<>
			<PostThought happyThoughts={happyThoughts} setHappyThoughts={setHappyThoughts} />
			<DisplayThought happyThoughts={happyThoughts} isLoading={isLoading} />
		</>
	)
}