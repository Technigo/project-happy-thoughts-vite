import { useState } from "react";
import "./likeThought.css";

export const LikeThought = ({ baseUrl, hearts, id, thoughts, setThoughts }) => {
    const [like, setLike] = useState([]);

    const likeEndPoint = "/like";
    const fullApiUrl = `${baseUrl}/${id}${likeEndPoint}`;

    const sendLike = async () => {
        await fetch(fullApiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Response was not ok");
                }
                return response.json();
            })
            .then((likes) => {
                const updatedThoughts = thoughts.map((thought) => {
                    if (thought._id === id) {
                        thought.hearts += 1;
                    }
                    return thought;
                });
                setThoughts(updatedThoughts); // Update the parent component's state
            })
            .catch((error) => {
                console.error("Error updating like", error);
            });
    }

    return (
        <div>
            <button onClick={sendLike} className="heart-btn">
                <span className="heart-emoji">❤️</span>
            </button>
            <span className="likes">x{hearts}</span>
        </div>
    )
}

//When the user clicks the heart button on a thought, send a POST request (with no body) to this URL. **Replace THOUGHT_ID with the `_id` parameter of the thought the user clicked on**

/*
(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        })

        
*/