import style from './ThoughtForm.module.css'
import React, { useState } from 'react';

const ThoughtForm = () => {

  const [newThought, setNewThought] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    setTimeout(() => { window.location.reload() }, 1000)

    try {
      const response = await fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: newThought })
      })

      if (response.ok) {
        setNewThought('')
        window.location.reload()
      } else {
        const data = await response.json()
        throw data
      }
    } catch (error) {
      console.error(error)
    }
  }

  const handleLikedThought = async (likedThoughtId) => {
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
  }

  return (
     <form className={style['happyform-style']}
     onSubmit = {handleSubmit}>
     <input 
      minLength={5}
      maxLength={140}
      type="text"
      value={newThought}
      onChange={(event) => setNewThought(event.target.value)}
      placeholder="What's making you happy right now?"
      className={style['thought-form-style']}
    />  
    {newThought.length < 5 && (
    <p style={{ color: 'red' }}>Minimum 5 characters required</p>
  )}
    <button className={style['submit-button-style']}>❤️ Send Happy Thought ❤️</button>
    </form>
  );

  }
 

  export {ThoughtForm}