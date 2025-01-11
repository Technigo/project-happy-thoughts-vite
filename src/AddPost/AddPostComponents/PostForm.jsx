// PostForm.jsx

import { useState } from "react";

export const PostForm = ({ addNewThought, url }) => {
  // Hooks
  const [newThought, setNewThought] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // Handle submit on form and POST to API
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent site to update
    setSubmitting(true); // For loading message on the button

    try {
      const response = await fetch(url, { // Use URL from App.jsx
        method: "POST", // POST to API
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: newThought }),
      });

      if (response.ok) {
        const result = await response.json();
        addNewThought(result); // Send new thought to App.jsx
        setNewThought(""); // Clean input/text field
      } else {
        console.error("Post failed:", response.status);
      }
    } catch (error) {
      console.error("Error during post:", error);
    } finally {
      setSubmitting(false); // No loading message on button anymore
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        type="text"
        name="thoughts"
        placeholder="Type your happy thought..."
        value={newThought} // Bind input/textfield to newthought-state
        onChange={(e) => setNewThought(e.target.value)}
        className="custom-textarea"
      />
      <button
        className="add-post-btn"
        type="submit"
        disabled={submitting}>
        {/* If submitting, show Submitting, otherwise show Send button */}
        {submitting ? <p>Submitting...</p> :
          <>❤️<p>Send happy thought</p>❤️</>}</button>
    </form>
  );
};