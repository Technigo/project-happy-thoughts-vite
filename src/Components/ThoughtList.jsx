import { useState, useEffect } from "react";
import { SingleThought } from "./SingleThought";

export const ThoughtList = () => {
    // Initialize a state for the thoughts
    const [thought, setThought] = useState(null);

    // Initialize a variable to store the API for thoughts
    const thoughtAPI = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

    // Define an asynchronous function "fetchRecentThoughts" to fetch the thoughts from the API
    const fetchRecentThoughts = async () => {
        // Use 'fetch' to make an API call to the defined URL
        await fetch(thoughtAPI)
            // Convert the raw response to JSON format
            .then((response) => {
                console.log(response);
                return response.json;
            })
            // Process JSON data
            .then((cleanInfo) => {
                // Check if 'data' property exists in the response
                if (cleanInfo.data) {
                    // Extract the 'data' property from the response
                    const cleanData = cleanInfo.data;
                    console.log(cleanData);
                    console.log(cleanData[0]);
                    console.log(cleanData[0].attributes);
                    console.log(cleanData[0].attributes.body);

                    // Extract the actual thought from the nested properties of the response
                    let extractedThoughtFromAPI = cleanData[0].attributes.body;

                    // Update the 'thought' state with the extracted thought
                    setThought(extractedThoughtFromAPI);
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }

    useEffect(() => {
        fetchRecentThoughts();
    }, [])

    return (
        <div><SingleThought thought={thought} /></div>
    )
};
