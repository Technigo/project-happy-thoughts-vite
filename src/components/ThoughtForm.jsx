import React, { useState } from 'react';

const ThoughtForm = ({ onThoughtSubmit }) => {
    // Skapa en state för meddelandet som användaren skriver in
    const [message, setMessage] = useState('');
    // Skapa en state för felmeddelanden (om validering misslyckas)
    const [error, setError] = useState(null);

    // Funktion för att hantera inlämning av formuläret
    const handleSubmit = async (event) => {
        event.preventDefault();

        // Validering av meddelandetext
        if (message.length < 5 || message.length > 140) {
            setError('Meddelandet måste vara mellan 5 och 140 tecken.');
            return;
        }

        // Skicka en POST-förfrågan till API:et med det nya meddelandet
        try {
            const response = await fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message }),
            });

            if (response.ok) {
                // Återställ formuläret och rensa felmeddelanden
                setMessage('');
                setError(null);
                // Anropa en callback-funktion för att meddela att en ny tanke har lagts till
                if (typeof onThoughtSubmit === 'function') {
                    onThoughtSubmit();
                }
            } else {
                // Visa ett felmeddelande om POST-förfrågan misslyckades
                setError('Ett fel uppstod vid postning av tanken. Försök igen senare.');
            }
        } catch (error) {
            console.error('Error posting thought:', error);
        }
    };

    return (
        <div>
            <h2>What is making you happy right now?</h2>
            <form onSubmit={handleSubmit}>
                <textarea
                    placeholder="Write your happy thought..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                {error && <p className="error">{error}</p>}
                <button type="submit">❤️ Send happy thoughts ❤️</button>
            </form>
        </div>
    );
};

export default ThoughtForm;
