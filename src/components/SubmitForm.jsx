import { useState } from 'react';

import PropTypes from 'prop-types';

export const SubmitForm = ({ onSubmit }) => {

  const [thought, setThought] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const URL = 'https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts';

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
    } catch (error) {
      console.log('Error posting thought:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="thought">What&apos;s making you happy right now?</label>
      <input
        type="text"
        id="thought"
        value={thought}
        placeholder="React is making me happy!!"
        onChange={(e) => setThought(e.target.value)}
      />
      <button type="submit">🩷Send Happy Thought🩷</button>
    </form>

  );
};

SubmitForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SubmitForm;