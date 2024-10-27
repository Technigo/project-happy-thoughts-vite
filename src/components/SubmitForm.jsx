import { useState } from 'react';
import PropTypes from 'prop-types';

export const SubmitForm = ({ onSubmit }) => {

  const [thought, setThought] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const URL = 'https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts';

    // Validate message length
    if (thought.length < 5 || thought.length > 140) {
      setError('Message must be betwwen 5 and 140 characters.');
      return;
    }

    try {
      const res = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: thought }),
      });
      const newThought = await res.json();
      onSubmit(newThought); // Passes new thought to App.jsx
      setThought(''); // Clears input field
      setError(''); // Clears any previous errors
    } catch (error) {
      console.log('Error posting thought:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="submit-form">
      <label htmlFor="thought">What&apos;s making you happy right now?</label>
      <input
        type="text"
        id="thought"
        value={thought}
        className="happy-thought-input"
        placeholder="React is making me happy!!"
        onChange={(e) => setThought(e.target.value)}
      />
      <button type="submit">🩷Send Happy Thought🩷</button>
      {error && <p className="error-message">{error}</p>}
    </form>

  );
};

SubmitForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SubmitForm;