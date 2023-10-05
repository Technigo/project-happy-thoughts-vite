import { useState, useEffect } from 'react'
import { UpdateHearts } from './UpdateHearts';
import { TimeandDate } from './TimeandDate';

export const RecentThoughts = () => {

    const [recentThoughts, setRecentThoughts] = useState([]);


    const thoughtsAPI = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

    //---Initial useEffect hook to run on first mount
    useEffect(() => {
        fetchHappyThoughts();
    }, [])


    //---- function to call the UpdateHeart function ----//

    //----------- function to -------------//
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
    }



    //need to pass id to updatehearts, and use it to fetch and POST, i dont think i need to p

    //read instructions!!!!! again

    return (
        <div>
            <ul>
                {recentThoughts.map(recentThought => (
                    <li className="one-thought-box" key={recentThought._id}>
                        {recentThought.message}
                        <p>
                            <UpdateHearts
                                heartID={recentThought._id}
                                heartCount={recentThought.hearts} />
                            <TimeandDate time={recentThought.createdAt} />

                        </p>
                    </li>
                ))}
            </ul>
        </div >
    )
};
