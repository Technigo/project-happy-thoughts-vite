import { useState } from "react";
import "./likeThought.css";

export const LikeThought = ({ baseUrl, hearts, id }) => {
    // Creating a useState for the amount of hearts. The initial value of the state is the number of hearts in total, coming from THoughtCard.jsx
    const [like, setLike] = useState(hearts);
    const [clicked, setClicked] = useState(false);

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

            if (response.ok) {
                // throw new Error("Response was not ok");

                // Parsing the response data as JSON
                const data = await response.json();
                // Updating the 'heart' state with the new number of hearts (likes)
                setLike(data.hearts);
                console.log(data);
                // Sets the button to "be clicked" by changing the state to true
                setClicked(true);
            }
        } catch (error) {
            console.error("Error updating like:", error);
        }
    }

    return (
        <div>
            {/* The class heart-btn is always present, when the button is clicked and the state changes to true, the class "clicked" is added to the button, the class "clicked" has a darker background color in the css file provided. */}
            <button onClick={sendLike} className={`heart-btn ${clicked ? "clicked" : ""}`}>
                <span className="heart-emoji">❤️</span>
            </button>
            <span className="likes">x{like}</span>
        </div>
    )
}
