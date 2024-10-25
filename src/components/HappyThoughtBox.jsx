import "./HappyThoughtBox.css";
import React, { useEffect, useState } from 'react';






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


    // Function to handle click and increase likes
    const handleLikeClick = (id) => {
        setHappyFeed((prevFeed) =>
        prevFeed.map((post) =>
            post._id === id ? { ...post, hearts: post.hearts + 1 } : post
        )
        );
    };

    // External function to handle rendering the like circle
    const renderLikeCircle = (post) => {
        const isLiked = post.hearts > 0 ? 'liked' : '';
        return (
            <div
            className={`like-circle ${isLiked}`}
            onClick={() => handleLikeClick(post._id)}
            >
                <span>❤️</span>
            </div>
        );
    };



    return (
        <div>
        { happyFeed.map(post => (
            <article key={post._id} className="happy-thought-box">

                <p className="hp-feed-text">{post.message}</p>

                    <div className="hp-footer">
                        <div className="hp-likes">
                            {renderLikeCircle(post)}
                            <p className="hp-likes-count">x {post.hearts || 0}</p>
                        </div>
                        <p className="hp-time">{TimeSinceLike(post.createdAt)}</p>
                    </div>
            </article>
        ))}
        </div>
    )
}

export {HappyThoughtBox}