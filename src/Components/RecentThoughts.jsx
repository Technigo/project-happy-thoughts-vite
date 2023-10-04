import { useState, useEffect } from 'react'
//import next component here?

export const RecentThoughts = () => {

    //add useState declaration

    const [recentThoughts, setRecentThoughts] = useState([]);

    const thoughtsAPI = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

    //add a useEffect method with a dependency as an empty array [], runs once after the initial reader, useful for one-time setups like fething data.

    const fetchHappyThoughts = () => {
        fetch(thoughtsAPI)
            .then((response) => response.json())
            .then((data) => {
                setRecentThoughts(data);
                console.log(data);
            })
            .catch((error) => {
                console.error("Failed to fetch info", error);
            });
    };

    useEffect(() => {
        fetchHappyThoughts();
    }, [])

    return (
        <div>RecentThoughts
            <ul>
                {recentThoughts.map(recentThought => (
                    <li className="one-thought-box" key={recentThought._id}>
                        {recentThought.message}
                    </li>
                ))}
            </ul>
        </div>
    )
}
