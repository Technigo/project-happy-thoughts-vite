import React from 'react';
import { useState, useEffect } from 'react';
import { Thought } from '../Thought/Thought';
import { Likes } from '../Likes/Likes';

import style from './ThoughtList.module.css';

export const ThoughtList = () => {
  // State to store the list of thoughts
  const [thoughts, setThoughts] = useState([]);

  // Fetch recent thoughts on component load
  useEffect(() => {
    // Define the fetchThoughts function
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


    // Call the fetchThoughts function to fetch thoughts
    fetchThoughts();
  }, []);
  // Handle likes

  const handleLikedThought = async  (likedThoughtId) => {
    try {
      // Send a POST request to the API to like a thought
      const response = await fetch(`https://project-happy-thoughts-api-6vz8.onrender.com/thoughts/${likedThoughtId}/like`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      });
      if (response.ok) {
        // If the request is successful, fetch the updated list of thoughts
       const updatedThoughts = thoughts.map((thought) => {
          // If this is the thought that the user liked, increment the hearts value by 1
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
      
      {/* Map through the thoughts array and render individual Thought components */}
      {thoughts.map((thought) => (

        // Pass the thought object as a prop to the Thought component
         <Thought 
         key={thought._id} 
         thought={thought} 
         onLike = {Likes}
         />
      ))}
    </div>
  );
}


