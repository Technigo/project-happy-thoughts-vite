import { useState } from "react";

export const UpdateHearts = (heartID) => {

    //REMEMBER: we accept props as an object in which the value we want turns into a property of that object
    //if we send with a normal word, props or anything without {} then we are sending an object with properties.

    //if we use {} we are sending the variable value

    //so I could send {heartID} and I would NOT have to use heartID.heartID

    let thisCount = heartID.heartID;
    console.log(`this count is:`, thisCount)

    const [likes, setLikes] = useState(heartID.heartCount);

    const addToHeartCount = async () => {

        const heartURL = `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thisCount}/like`;

        //look into "" and `` -> this is different! Team Lemon's reminded me of this as I had used double quotes above!
        //I had my URL in quote marks " " and it was not working properly! 
        //must use back ticks when we use ${} ($() don't forget they are template literals)

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
    }
    return (
        <>
            <div>
                < button className="heart-button"
                    onClick={addToHeartCount} >
                    <img className="heart-img" src="/assets/heart-like-button.png"></img>
                </button >
                x{likes}
            </div>
        </>
    );
}