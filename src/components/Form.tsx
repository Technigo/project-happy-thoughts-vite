import { useState } from 'react';

interface Thought {
  _id: string;
  message: string;
  hearts: number;
  createdAt: string;
}

interface MessageFormProps {
  onThoughtAdded: (thought: Thought) => void;
}

const MessageForm = ({ onThoughtAdded }: MessageFormProps) => {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (message.length < 1 || message.length > 140) {
      setError('Message must be between 1 and 140 characters long.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) {
        throw new Error('Failed to post the thought');
      }

      const data = await response.json();
      setMessage('');
      onThoughtAdded(data);
    } catch (err) {
      setError('An error occurred while posting the thought.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        What&apos;s making you happy right now?
        <textarea
          value={message}
          onChange={handleChange}
          rows={4}  // Corrected to number
          placeholder=":)"
          style={{ resize: 'none' }}
        />
      </label>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <p className="counter" style={{ color: message.length > 140 ? 'red' : 'black' }}>
        {message.length}/140
      </p>
      <button className="post-button" type="submit" disabled={loading}>
        {loading ? 'Sending...' : 'Send Happy Thought'}
      </button>
    </form>
  );
};

export default MessageForm;
