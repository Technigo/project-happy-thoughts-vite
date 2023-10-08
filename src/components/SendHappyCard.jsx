/* eslint-disable react/prop-types */

import { useState, useEffect } from 'react'

import "./send-happy-card.css"

export const SendHappyCard = ({ setNewMessage, fetchAllMessages }) => {

    const [newHappyThought, setNewHappyThought] = useState("")
    const [charCount, setCharCount] = useState(0)
    const [charColor, setCharColor] = useState('grey')

    useEffect(()=>{
        if ((parseInt(charCount)/140) > 1) {
            setCharColor('red')
        }
    }, [charCount])

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
                "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts",
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
                placeholder="'If music be the food of love, play on' - William Shakespeare" 
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
