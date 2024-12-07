import { useState } from "react";

interface SubmitFormProps {
  onSubmit: (newThought: {
    _id: string;
    message: string;
    hearts: number;
    createdAt: string;
  }) => void;
}

export const SubmitForm = ({ onSubmit }: SubmitFormProps): JSX.Element => {
  const [thought, setThought] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    const URL = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

    // Validate message length
    if (thought.length < 5 || thought.length > 140) {
      setError("Message must be between 5 and 140 characters.");
      return;
    }

    try {
      const res = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: thought }),
      });
      const newThought = await res.json();
      onSubmit(newThought); // Passes new thought to App.jsx
      setThought(""); // Clears input field
      setError(""); // Clears any previous errors
    } catch (error) {
      console.error("Error posting thought:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="submit-form">
      <label className="submit-form-label">
        What&apos;s making you happy right now?
        <textarea
          id="thought" // Optional but still useful for accessibility
          value={thought}
          rows={2}
          className="happy-thought-input"
          placeholder="React is making me happy!!"
          onChange={(e) => setThought(e.target.value)}
        />
      </label>
      <button type="submit">🩷 Send Happy Thought 🩷</button>
      {error && <p className="error-message">{error}</p>}
    </form>
  );
};

export default SubmitForm;
