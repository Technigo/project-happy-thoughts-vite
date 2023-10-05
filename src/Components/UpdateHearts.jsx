

export const UpdateHearts = (heartID, heartCount) => {

    console.log(`hearts ID is:`, heartID)
    console.log(`heartscount is:! ${heartID.heartCount}`)
    console.log(`hearts ID within the ID is:! ${heartID.heartID}`)

    const addToHeartCount = () => {

        console.log("we are in the addToHeartCount function")

    }


    // Sending data to an API using fetch
    // fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({ hearts: { heartscount } })
    // })
    //     .then(response => response.json())
    //     .then(data => {
    //         // Process the API response data
    //         console.log(data)
    //     })
    //     .catch(error => {
    //         // Handle any errors that occurred during the API request
    //         console.error('Error:', error)
    //     })


    ///write the button in this component and the onclick goes to a function inside here!!!


    return (

        <div>
            <p>
                < button className="heart-button"
                    onClick={addToHeartCount} >
                    <img className="heart-img" src="./public/assets/heart-like-button.png"></img>
                </button >
                x{heartID.heartCount}

            </p>
        </div>
    );
}