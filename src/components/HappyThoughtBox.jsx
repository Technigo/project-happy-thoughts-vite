import "./HappyThoughtBox.css"
import React, { useEffect, useState } from 'react';

const URL = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts"




const HappyThoughtBox = (props) => {
    
    const [happyFeed, setHappyFeed] = useState([])

    /* Fetches the data from the API/url */
    useEffect(() => {
        fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
            .then(response => response.json())
            .then(data => setHappyFeed(data.slice(0, 20))) // Limit to 20 latest items
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    
    const TimeSinceLike = (timestamp) => {
        const now = new Date();
        const postDate = new Date(timestamp);
        const secondsAgo = Math.floor((now - postDate) / 1000);
      
        if (secondsAgo < 60) return `${secondsAgo} seconds ago`;
        const minutesAgo = Math.floor(secondsAgo / 60);
        if (minutesAgo < 60) return `${minutesAgo} minutes ago`;
        const hoursAgo = Math.floor(minutesAgo / 60);
        if (hoursAgo < 24) return `${hoursAgo} hours ago`;
        const daysAgo = Math.floor(hoursAgo / 24);
        return `${daysAgo} days ago`;
      };


    return (
        <div>
        { happyFeed.map(posts => (
            <article key={posts} className="happy-thought-box">

                <p className="hp-feed-text">{posts.message}</p>

                    <div className="hp-footer">
                        {/* <img className="hp-like" src={h.}/> */}
                        {/* <LikesTimeAgo /> */}
                        <p className="hp-time">{TimeSinceLike(posts.createdAt)}</p>
                    </div>
            </article>
        ))}
        </div>
    )
}

export {HappyThoughtBox}