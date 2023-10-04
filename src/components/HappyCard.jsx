/* eslint-disable react/prop-types */
import { useState } from 'react'
import moment from "moment"

export const HappyCard = ({ message, hearts, createdAt, id, timeToFetch }) => {

    const [amountOfHearts, setAmountOfHearts] = useState(hearts)
    const [loveColor, setLoveColor] = useState('lightgrey')

    const happyMessage = message
    const timeCreated = moment(createdAt).startOf("minute").fromNow()
    const happyID = id

    const sendLove = async () => {
        const postOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" }
        }
        await fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${happyID}/like`, postOptions)
        .then(response => response.json())
        .then(data => {
            setAmountOfHearts(data.hearts)
            timeToFetch()
            setLoveColor('pink')
        })
        .catch(error => console.log(error))


    }

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