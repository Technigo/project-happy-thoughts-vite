import React, { useState, useEffect } from 'react'
import { ThoughtsList } from "./ThoughtsList"



export const NewThought = ({ onThoughtSubmit }) => {
    const  [thought, setThought] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    
  

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (thought.trim() === '') {
            return;
        }
        setIsSubmitting(true);

        try {
        await onThoughtSubmit(thought);
        console.log('Thought posted successfully!');
        } catch (error) {
        console.error("Error posting thought:", error);
      } finally {
        setIsSubmitting(false);
        setThought("");
      }
      };

        
  return (
    <div className='NewThought'>
        <h2>What's making you happy?</h2>
        <form onSubmit={handleSubmit} className="thought-form">
            <label>
                <input
                    type="text"
                    value={thought}
                    onChange={(e) => setThought(e.target.value)}
                    disabled={isSubmitting}
                    className="thought-input"
                />
            </label>
            <button type="submit" disabled={isSubmitting} className="thought-button">
                {isSubmitting ? "Submitting..." : "❤️ Send Happy Thought ❤️"}
            </button>
        </form>
    </div>
  );
 };

export default NewThought;