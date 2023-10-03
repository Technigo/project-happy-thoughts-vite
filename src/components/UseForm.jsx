import React, { useState } from 'react';

function useForm({ additionalData }) {
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (formData) => {
    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setMessage("Thought added successfully!");
      } else {
        const errorData = await response.json();
        setStatus('error');
        setMessage(errorData.error || 'Failed to add new thought. Please try again.');
      }
    } catch (error) {
      console.error('Error adding new thought:', error);
      setStatus('error');
      setMessage('Failed to add new thought. Please try again.');
    }
  };

  return { handleSubmit, status, message };
}

export default useForm;