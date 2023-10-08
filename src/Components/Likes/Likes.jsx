import React from 'react'
import { useState, useEffect } from 'react'
import { Thought } from '../Thought/Thought'


export const Likes = () => {
    const [thoughts, setThoughts] = useState([]);
    handleLikedThought = async (likedThoughtId) => {
        try {
          // Send a POST request to the API to like a thought
          const response = await fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${likedThoughtId}/like`, {
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
        
        };
    return (
        <div>
            
        </div>
    )
}

export default Likes