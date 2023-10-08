
import { formatDistance } from "date-fns";
import { useState } from "react";
import "../index.css";


export const SingleThought = ({ singleThought }) => {

    const [numLikes, setNumLikes] = useState(singleThought.hearts);
    const [liked, setLiked] = useState(false);
    const messageId = singleThought._id;

    const onLikeIncrease = async () => {
        try {
            const options = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ messageId }),
            };

            const response = await fetch(
                `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${messageId}/like`,
                options
            );

            if (!response.ok) {
                throw new Error('Failed to like the message');
            }

            const data = await response.json();
            setLiked(true);
            setNumLikes(data.hearts);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return <section className="single-message-wrapper">
        <p>{singleThought.message}</p>
        <div className="message-info-wrapper">
            <div className="info-like">
                <button
                    className={`like-button ${liked ? "liked" : ""}`}
                    onClick={onLikeIncrease}>
                    <span className="heart-emoji" aria-label="like button">❤️</span>
                </button>
                <span className="number-likes">x {numLikes}</span>
            </div>
            <div className="info-time">{formatDistance(new Date(singleThought.createdAt), Date.now(), { addSuffix: true, })}</div>
        </div>
    </section>;
};
