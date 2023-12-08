import React, { useState, useEffect } from 'react'
import '../index.css';




export const NewThought = ({ onThoughtSubmit }) => {
    const  [thought, setThought] = useState('');
    const [inputLength, setInputLength] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e) => {
      const inputValue = e.target.value;
      setInputLength(inputValue.length);
      setThought(inputValue.slice(0, 140));
    };
   
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (thought.trim().length <5) {
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
        setInputLength(0);
      }
     };

        
     return (
        <div className="NewThought">
          <h2>What's making you happy?</h2>
          <form onSubmit={handleSubmit} className="thought-form">
            <label>
              <textarea
                rows="7"
                cols="40"
                maxLength="140"
                placeholder="'A beautiful day begins with a beautiful mindset'"
                value={thought}
                onChange={handleInputChange}
                disabled={isSubmitting}
                className="thought-input"
              />
            </label>
            <button type="submit" disabled={isSubmitting || inputLength < 5} className="thought-button">
              {isSubmitting ? 'Submitting...' : '❤️ Send Happy Thought ❤️'}
            </button>
          </form>
        </div>
      );
    };

export default NewThought;