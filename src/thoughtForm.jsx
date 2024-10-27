import React, { useState } from 'react';
import './ThoughtForm.css';

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

        // message lenght validation//Validar la longitud del mensaje
        if (message.length < 5 || message.length > maxChars) {
            setError('Message must be between 5 and 140 characters');
            return;
        }

        // Send happy thought to API//Enviar el nuevo pensamiento a la API
        fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message }), // message send as json object//Se envía el mensaje como un objeto JSON
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json(); // Pars answer as json//Parsear la respuesta como JSON
            })
            .then((data) => {
                addThought(data); // Add new thought//Agregar el nuevo pensamiento
                setMessage(''); // Delete text field//Limpiar el campo de texto
                setError(''); // Delete error message//Limpiar el mensaje de error
                setIsTyping(false); // Typing set up if error message//Restablecer el estado de escritura
            })
            .catch(() => setError('Failed to send message')); // Cope errors//Manejar errores en la solicitud
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={message}
                onChange={(e) => {
                    setMessage(e.target.value);
                    handleTyping(); // Handle Typing function call//Llamar a la función para indicar que se está escribiendo
                }}
                maxLength={maxChars}
                placeholder="What's making you happy today?"
            />
            <p>{maxChars - message.length} characters remaining</p>
            {error && <p className="error">{error}</p>} {/* Mostrar errores si hay */}
            <button type="submit">❤️Send Happy Thought❤️</button>
            {isTyping && <div className="flowers">🌸🌼🌺</div>} {/*Flower icons floating while typing// Iconos de flores */}
        </form>
    );
};

export default ThoughtForm;
