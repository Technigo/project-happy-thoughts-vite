/* eslint-disable react/prop-types */

/* A component which displays a happy thought (stored and fetched in/from an API). The thought is fetched in the App-component and its content passed as props. This component also has a ❤️-button which posts likes to the API. */
import { useState } from 'react'
import moment from "moment"

/* message, hearts, createdAt and id are information fetched from the API. setLoveSent is a function which updates state (total amount of likes sent by the user) in the App. fetchAllMessages is a function in App which re-fetched all messages from the API */
export const HappyCard = ({ message, hearts, createdAt, id, setLoveSent, fetchAllMessages }) => {

    /* State to show/set the total number of likes per post/thought. State to store/set the backgroundcolor of love-button */
    const [amountOfHearts, setAmountOfHearts] = useState(hearts)
    const [loveColor, setLoveColor] = useState('lightgrey')

    const happyMessage = message
    const timeCreated = moment(createdAt).startOf("minute").fromNow()
    const happyID = id

    //Function to send a like to the API when the love-button is pressed. From the returned data the total number of likes is updated. The background color of the love-button is updated, the total amount of loves sent is updated and messages are refetched from the API. Errors are catched and displayed on the console
    const sendLove = async () => {
        const postOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" }
        }
        await fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${happyID}/like`, postOptions)
        .then(response => response.json())
        .then(data => {
            setAmountOfHearts(data.hearts)
            setLoveColor('pink')
            setLoveSent((previous) => (previous + 1))
            fetchAllMessages()
        })
        .catch(error => console.log(error))
    }

    //A div containing the Happy thought, a love-button including the amount of likes and time since post was created
    return(
        <div className="happy-card">
            <p>{happyMessage}</p>
            <div className="love-and-time">
                <div className="the-love">
                    <button className="love-button" onClick={sendLove} style={{"backgroundColor": loveColor}} >&#x2764;&#xFE0F;</button> x {amountOfHearts}
                </div>
                <p>{timeCreated}</p>
            </div>
        </div>
    )
}