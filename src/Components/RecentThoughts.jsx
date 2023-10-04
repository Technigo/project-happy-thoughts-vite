import { useState, useEffect } from 'react'
import { UpdateHearts } from './UpdateHearts';
//import next component here?

export const RecentThoughts = () => {

    const [recentThoughts, setRecentThoughts] = useState([]);


    const thoughtsAPI = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

    //---Initial useEffect hook to run on first mount
    useEffect(() => {
        fetchHappyThoughts();
    }, [])

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

    return (
        <div>
            <ul>
                {recentThoughts.map(recentThought => (
                    <li className="one-thought-box" key={recentThought._id}>
                        {recentThought.message}
                        <p>
                            <button className="heart-button" onClick={UpdateHearts}>
                                <img className="heart-img" src="./public/assets/heart-like-button.png"></img>
                            </button>
                            x{recentThought.hearts}
                        </p>
                    </li>
                ))}
            </ul>
        </div >
    )
}
