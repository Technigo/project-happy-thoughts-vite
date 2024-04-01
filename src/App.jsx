// App.jsx
import { useState, useEffect } from 'react';
import ThoughtList from './components/ThoughtList';
import ThoughtForm from './components/ThoughtForm';

const App = () => {
  const [thoughts, setThoughts] = useState([]);

  useEffect(() => {
    fetchThoughts();
  }, []);

  const fetchThoughts = () => {
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch thoughts');
        }
        return response.json();
      })
      .then(data => setThoughts(data))
      .catch(error => console.error('Error fetching thoughts:', error));
  };

  const handleFormSubmit = (newThought) => {
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: newThought })
    })
    .then(response => {
      if (response.ok) {
        fetchThoughts(); // Fetch updated thoughts after adding a new one
      } else {
        console.error('Could not create thought:', response.statusText);
      }
    })
    .catch(error => console.error('Could not create thought:', error));
  };

  const handleLike = (thoughtId) => {
    fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thoughtId}/like`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        fetchThoughts(); // Fetch updated thoughts after liking
      } else {
        console.error('Could not like thought:', response.statusText);
      }
    })
    .catch(error => console.error('Could not like thought:', error));
  };

  return (
    <div className="App">
      <ThoughtForm onFormSubmit={handleFormSubmit} />
      <ThoughtList thoughts={thoughts} onLike={handleLike} />
    </div>
  );
};

export default App;
