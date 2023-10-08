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

  return (
     <form onSubmit = {handleSubmit}>
     <input 
      minLength={5}
      maxLength={140}
      type="text"
      value={newThought}
      onChange={(event) => setNewThought(event.target.value)}
      placeholder="What's making you happy right now?"
      className={style['input-style']}
    />  
    {newThought.length < 5 && (
    <p style={{ color: 'red' }}>Minimum 5 characters required</p>
  )}
    <button className={style['submit-button-style']}>❤️ Send Happy Thought ❤️</button>
    </form>
  );

  }

  export {ThoughtForm}