
import React, { useState, useEffect } from "react";
import { ThoughtForm } from './ThoughtForm';

export const HappyThoughts = () => {
  const [thoughts, setThoughts] = useState([]);

  useEffect(() => {
    fetch('https://project-happy-thoughts-api-j0eg.onrender.com/thoughts')
      .then(res => res.json())
      .then(data => {
        console.log(data); // Logga den faktiska datan
      })
      .catch(error => {
        console.error('Fel vid hämtning av tankar:', error); // Logga eventuella fel
      });
  }, []); // Se till att denna rad är korrekt

  return (
    <div>
      <h1>Happy Thoughts</h1>
      {/* Här kan du rendera tankarna om du vill */}
    </div>
  );
};