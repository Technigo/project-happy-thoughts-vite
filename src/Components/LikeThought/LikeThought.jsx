import { useState } from "react";
import "./likeThought.css";

export const LikeThought = ({ baseUrl, hearts, id }) => {
    // Creating a useState for the amount of hearts. The initial value of the state is the number of hearts in total, coming from THoughtCard.jsx
    const [like, setLike] = useState(hearts)

    // Dividing up  the url into one variable for easy access
    const likeEndPoint = "/like";
    const fullApiUrl = `${baseUrl}/${id}${likeEndPoint}`;

    const sendLike = async () => {
        // Async fetch function using the Try/Catch metod. Try doing a fetch, oterwise show an error in the console.
        try {
            const response = await fetch(fullApiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error("Response was not ok");
            }
            // Parsing the response data as JSON
            const data = await response.json();
            console.log(data.hearts);

            // Updating the 'heart' state with the new number of hearts (likes)
            setLike(data.hearts);
        } catch (error) {
            console.error("Error updating like:", error);
        }
    }

    return (
        <div>
            <button onClick={sendLike} className="heart-btn">
                <span className="heart-emoji">❤️</span>
            </button>
            <span className="likes">x{like}</span>
        </div>
    )
}
