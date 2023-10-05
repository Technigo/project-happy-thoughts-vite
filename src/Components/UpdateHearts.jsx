import { useState } from "react";

export const UpdateHearts = (heartID, heartCount) => {

    let thisCount = heartID.heartID;

    const [likes, setLikes] = useState(heartID.heartCount);

    const addToHeartCount = async () => {

        console.log(thisCount);
        console.log("we are in the addToHeartCount function")

        const heartURL = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thisCount}/like";

        try {
            const response = await fetch(heartURL,
                {
                    method: "POST",
                });

            if (response.ok) {
                setLikes((prevLikes) => prevLikes + 1);
            } else {
                console.error("Error");
            }
        } catch (error) {
            console.error("Failed to fetch info", error);
        };

        console.log(likes);
    }

    return (

        <div>
            <p>
                < button className="heart-button"
                    onClick={addToHeartCount} >
                    <img className="heart-img" src="./public/assets/heart-like-button.png"></img>
                </button >
                x{likes}

            </p>
        </div>
    );
}