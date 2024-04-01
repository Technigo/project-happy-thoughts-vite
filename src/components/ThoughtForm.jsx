// ThoughtForm.jsx
import { useState } from 'react';
import PropTypes from 'prop-types';

const ThoughtForm = ({ onFormSubmit }) => {
  const [newThought, setNewThought] = useState('');
  const [warningText, setWarningText] = useState('');

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setNewThought(inputValue);
    if (inputValue.length < 5 || inputValue.length > 140) {
      setWarningText('Text must be between 5 and 140 characters');
    } else {
      setWarningText('');
    }
  };

  const handleSubmit = () => {
    if (newThought.trim() !== '' && newThought.length >= 5 && newThought.length <= 140) {
      onFormSubmit(newThought);
      setNewThought('');
    } else {
      setWarningText('Text must be between 5 and 140 characters');
    }
  };

  return (
    <div className="creator-card">
      <div>
        <label className='main-text' htmlFor="textarea">What´s making you happy right now?</label>
        <textarea
          id="textarea"
          className="textarea-input"
          placeholder="Share your happy thought..."
          minLength={5}
          maxLength={140}
          value={newThought}
          onChange={handleInputChange}
        />
        <p>{warningText}</p>
      </div>
      <button className="submit-button" onClick={handleSubmit}>❤️ Send Happy Thought ❤️</button>
    </div>
  );
};

ThoughtForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};

export default ThoughtForm;
