import React, { useState } from 'react';
import './thoughtForm.css';

const ThoughtForm = ({ addThought }) => {
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const maxChars = 140;

    const handleTyping = () => {
        setIsTyping(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validación de longitud del mensaje
        if (message.length < 5 || message.length > maxChars) {
            setError('Message must be between 5 and 140 characters');
            return;
        }

        // Enviar el pensamiento a tu API
        fetch(`${import.meta.env.VITE_API_URL}/thoughts`, { // Actualización aquí
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message }), // Enviar el mensaje como un objeto JSON
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then((data) => {
                addThought(data); // Agregar el nuevo pensamiento a la lista
                setMessage(''); // Limpiar el campo de texto
                setError(''); // Limpiar el mensaje de error
                setIsTyping(false);
            })
            .catch(() => setError('Failed to send message'));
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={message}
                onChange={(e) => {
                    setMessage(e.target.value);
                    handleTyping();
                }}
                maxLength={maxChars}
                placeholder="What's making you happy today?"
            />
            <p>{maxChars - message.length} characters remaining</p>
            {error && <p className="error">{error}</p>}
            <button type="submit">❤️Send Happy Thought❤️</button>
            {isTyping && <div className="flowers">🌸🌼🌺</div>}
        </form>
    );
};

export default ThoughtForm;
