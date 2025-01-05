import "./HappyThoughtBox.css";
import React, { useEffect, useState } from "react";






const HappyThoughtBox = (props) => {
    const [happyFeed, setHappyFeed] = useState([]);
    const [likedPosts, setLikedPosts] = useState({}); // function to 

    /* Fetches the data from the API/url */
    useEffect(() => {
        /* old api: https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts */
        fetch("https://project-19-happy-thoughts-api.onrender.com/happythoughts")
            .then(response => response.json())
            .then(data => setHappyFeed(data.slice(0, 20))) // Limit to 20 latest items
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    // Function to toggle likes
    const handleLikeClick = async (id) => {
        // Kolla om posten redan är gillad
        const alreadyLiked = likedPosts[id];
    
        try {
          // POST request to API
          await fetch(`https://project-19-happy-thoughts-api.onrender.com/happythoughts/${id}/like`, {
            method: alreadyLiked ? "DELETE" : "POST", 
            headers: { "Content-Type": "application/json" },
          });
    
          setLikedPosts((prev) => ({ ...prev, [id]: !alreadyLiked }));
          setHappyFeed((prevFeed) =>
            prevFeed.map((post) =>
              post._id === id
                ? { ...post, hearts: post.hearts + (alreadyLiked ? -1 : 1) }
                : post
            )
          );
        } catch (error) {
          console.error("Error updating like:", error);
        }
      };


    // Function to show how long ago a message got posted
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
          {happyFeed.map((post) => (
            <article key={post._id} className="happy-thought-box">
              <p className="hp-feed-text">{post.message}</p>
              <div className="hp-footer">
                <div className="hp-likes">
                  <div
                    className={`like-circle ${likedPosts[post._id] ? "liked" : ""}`}
                    onClick={() => handleLikeClick(post._id)}
                  >
                    <span>❤️</span>
                  </div>
                  <p className="hp-likes-count">x {post.hearts || 0}</p>
                </div>
                <p className="hp-time">{TimeSinceLike(post.createdAt)}</p>
              </div>
            </article>
          ))}
        </div>
      );
}

export {HappyThoughtBox}