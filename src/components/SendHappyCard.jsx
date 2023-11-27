/* eslint-disable react/prop-types */
//The component in which the happy thought is created and sent to the API. Recieves props from the App-component which re-fetches all messages and sets a new message.

import { useState, useEffect } from 'react'

import "./send-happy-card.css"

export const SendHappyCard = ({ setNewMessage, fetchAllMessages }) => {

    //State to store the new happy thought to be sent to the API. State to store the character count, this is updated continously. State to store character color, this updates to red when the maximum amount of characters is changed
    const [newHappyThought, setNewHappyThought] = useState("")
    const [charCount, setCharCount] = useState(0)
    const [charColor, setCharColor] = useState('grey')

    //Effect with character count as a dependency. If the count > 140, the color of the characters updates to red, otherwise grey
    useEffect(()=>{
        if ((parseInt(charCount)/140) > 1) {
            setCharColor('red')
        }
        else setCharColor('grey')
    }, [charCount])

    //Function to handle the submission of the happy thought. Alerts the user if the post is < 5 characters. Otherwise posts the message to the API. After the post-request the happy thought is reset to "" and all messages are refetched. Errors are caught and displayed on the console.
    const handleSendingHappyThought = async (event) => {
        event.preventDefault()

        if (newHappyThought.length < 5) {alert(`Cannot submit message, it must be more than 4 characters 🤦🏼‍♀️`)}
        else{
            const postOptions = {
                method: "POST",
                body: JSON.stringify({message: `${newHappyThought}`}),
                headers: { "Content-Type": "application/json" }
            }

            await fetch(
                "https://love-twitter-api.onrender.com/thoughts",
                postOptions
            )
            .then(response => response.json())
            .then(data => {
                setNewMessage(data)
                setNewHappyThought("")
                fetchAllMessages()
                })
                .catch(error => console.log(error))
            }
    }

    //A div containing a header, and a textarea with max-input 140 characters. When updated the char-count state and the happy thought state are updated. The color is stored in a state. There is a paragraph displaying the char count and a button to submit the thought.
    return(
        <div className="send-happy-card">

            <h4 
            className="send-happiness-header">
                What is making you happy right now?
            </h4>

            <textarea
                name="Send happy thought"
                id="happy-thought" 
                className="input-send-happy-thought" 
                value={newHappyThought}
                onChange={(event)=>{
                    setCharCount(event.target.value.length)
                    setNewHappyThought(event.target.value)
                }}
                placeholder="'There is no path to happiness, happiness is the path' - Buddha" 
                style={{'color': charColor}}
                maxLength={140}
                />
                
            <p 
                className="char-count"
                style={{'color': charColor}}
                >
                    {charCount}/140
            </p>

            <button className="send-happy-thought-button" onClick={handleSendingHappyThought}>
            &#x2764;&#xFE0F; Send Happy Thought &#x2764;&#xFE0F;
            </button>
        
        </div>
    )
}
