import React from 'react';
import ThoughtItem from './ThoughtItem.jsx';

function ThoughtList({ thoughts, onLike }) {
    // Only up to last 4 thoughts and by date priority//Limitar a los últimos 4 pensamientos y ordenar por fecha
    const limitedThoughts = thoughts
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // By date priority//Ordenar por fecha
        .slice(0, 4); // Only last 4 thoughts//Limitar a los últimos 4 pensamientos

    return (
        <div className="thought-list">
            {limitedThoughts.map((thought) => (
                <ThoughtItem key={thought._id} thought={thought} onLike={onLike} />
            ))}
        </div>
    );
}

export default ThoughtList;
