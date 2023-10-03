import React, { useState } from 'react';

const Thought = ({ thought }) => {
    // Lägg till en state-variabel för att hålla reda på antalet gillningar
    const [hearts, setHearts] = useState(thought.hearts);

    // Funktion för att gilla en tanke
    const handleLikeClick = () => {
        // Skicka en POST-förfrågan till API:et för att gilla tanken
        // Uppdatera antalet gillningar i state
        setHearts(hearts + 1);
    };

    return (
        <div className="thought">
            <p>{thought.message}</p>
            <div className="actions">
                <button onClick={handleLikeClick}>❤️</button>
                <span>{hearts}</span>
            </div>
        </div>
    );
};

export default Thought;
