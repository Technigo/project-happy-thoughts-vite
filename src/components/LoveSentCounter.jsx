/* eslint-disable react/prop-types */
// A container which displays the total amount of loves sent by the user. This is saved as a state in the App-component and sent as a prop
export const LoveSentCounter = ({ loveCounter }) => {
    return (
        <div className="love-sent-container">
            Amount of hearts given out this session: {loveCounter} 
        </div>
    )
}