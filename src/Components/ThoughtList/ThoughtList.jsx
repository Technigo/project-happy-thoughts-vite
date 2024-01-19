import { useState, useEffect } from 'react';
import { Thought } from '../Thought/Thought';
import { Likes } from '../Likes/Likes';

import style from './ThoughtList.module.css';

export const ThoughtList = () => {
  const [thoughts, setThoughts] = useState([]);

  useEffect(() => {
    const fetchThoughts = async () => {
      try {
        const response = await fetch("https://project-happy-thoughts-api-6vz8.onrender.com/thoughts");
        if (response.ok) {
          const data = await response.json();
          setThoughts(data);
        } else {
          console.error('Failed to fetch thoughts');
        }
      } catch (error) {
        console.error('Error fetching thoughts:', error);
      }
    };
    fetchThoughts();
  }, []);
  const handleLikedThought = async  (likedThoughtId) => {
    try {
      const response = await fetch(`https://project-happy-thoughts-api-6vz8.onrender.com/thoughts/${likedThoughtId}/like`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      });
      if (response.ok) {
       const updatedThoughts = thoughts.map((thought) => {
          if (thought._id === likedThoughtId) {
            thought.hearts += 1;
          }
          return thought;
        }
        
        );
        setThoughts(updatedThoughts);
        
      } 
      
       else {
        console.error('Failed to like thought');
      }
    } catch (error) {
      console.error('Error liking thought:', error);
    }
  }

  return (
    <div className={style['thought-list-style']}>
      {thoughts.map((thought) => (
         <Thought 
         key={thought._id} 
         thought={thought} 
         onLike = {Likes}
         />
      ))}
    </div>
  );
}


