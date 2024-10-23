// PostForm.jsx

import { useState } from 'react';

export const PostForm = ({ addNewThought, url }) => {
  const [newThought, setNewThought] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // Hantera formulär-submit och POST till API
  const handleSubmit = async (event) => {
    event.preventDefault(); // Förhindra siduppdatering
    setSubmitting(true);

    try {
      const response = await fetch(url, { // Använd URL som kommer från App.jsx
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: newThought }),
      });

      if (response.ok) {
        const result = await response.json();
        addNewThought(result); // Skicka upp den nya tanken till App.jsx
        setNewThought(''); // Rensa inputfältet
      } else {
        console.error('Post failed:', response.status);
      }
    } catch (error) {
      console.error('Error during post:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        type="text"
        name="thoughts"
        placeholder="Type your happy thought..."
        value={newThought} // Bind inputfältet till thought-state
        onChange={(e) => setNewThought(e.target.value)}
        required
        className="custom-textarea"
      />
      <button
        className="add-post-btn"
        type="submit"
        disabled={submitting}>
        {submitting ? <p>Submitting...</p> :
          <>❤️<p>Send happy thought</p>❤️</>}</button>
    </form>
  );
};