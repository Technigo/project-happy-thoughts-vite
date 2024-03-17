//importing moment from moment library, to easily display the timestamp in the return!
import moment from "moment";

//in this component I need the thoughtslist to display the feed,
//also to be able to add likes to specific thoughts. 
//Will also need to update the thoughts array with setThoughtsList.
export const Feed = ({ thoughtsList, setThoughtsList }) => {
    console.log("thoughtsList:", thoughtsList); //check if I sent it correctly

    //handling the hearts given! using the already mapped thoughtsList in the return!
    const onLikeIncrease = async (singleThought) => {
        console.log("singleThought id:", singleThought._id);//check if I sent it correctly

        //declaring the Like API, specifically belonging to the one targeted by user by clicking like button.
        const LIKEAPI = `https://project-happy-thoughts-api-wrhl.onrender.com/thoughts/${singleThought._id}/like`;
        
        //defining request options for the fetch.
        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
        };

        //POST-fetching (sending) to the like-API endpoint!
        await fetch(LIKEAPI, options)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Response was not ok");
                }
                return response.json();
            })
            .then(() => {
                //creating new array (updatedThoughts) with a map of thoughtsList
                const updatedThoughts = thoughtsList.map((updateThought) => {
                    //conditional check if the thought i want to update is the same as the one being liked
                    // if yes add a like, otherwise return unchanged
                    if (updateThought._id === singleThought._id) {
                        updateThought.hearts += 1;
                    }
                    return updateThought;
                });
                //setting up the thoughtsList again with the updated value.
                setThoughtsList(updatedThoughts);
            })
            .catch((error) => {
                console.error("Error updating like", error);
            });
    };

    //Using .map() to render a post for every object in thoughtsList array. Now called singleThought.
    //OBS! atm two keys?? one for whole div, one for createdAt
    return (
        <section className="feed-section">
            {thoughtsList.map((singleThought) => {
                return (
                    <div className="post-wrapper" key={singleThought._id}>
                        <h3 className="post-message">
                            {singleThought.message}
                        </h3>
                        <div className="button-time-wrapper">
                            <div className="button-count-wrapper">
                                {/*button with onClick that passes the onLikeIncrease function!
                                also just added my own heart icon.*/}
                                <label className="like-label">
                                    <button
                                    className="button-like"
                                    type="button"
                                    onClick={() => onLikeIncrease(singleThought)}>
                                        <img
                                        className="button-like-img"
                                        src="pixel-heart.png"
                                        alt="a pixelated heart"/>
                                    </button>
                                    <p>x {singleThought.hearts}</p>
                                </label>
                            </div>
                            {/*Using moment that was earlier installed “npm install moment --save”, and imported (top of document) */}
                            <p key={singleThought._id}>
                                {moment(singleThought.createdAt).fromNow()}
                            </p>
                        </div>
                    </div>
                );
            })}
        </section>
    );
};
