import { useState, useEffect } from 'react';
// import { ThoughtForm } from './Components/ThoughtForm';
import { ThoughtList } from './Components/ThoughtList';


const BASE_URL = 'https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts';

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // loading state

  useEffect(() => {
    const fetchThoughts = async () => {
      try {
        const response = await fetch(BASE_URL);
        const result = await response.json();
        setThoughts(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchThoughts();
  }, []);

  return (
    <div className="App">
      {isLoading && <h1>Loading...</h1>}
      {!isLoading && (
        <div>
          {/* <ThoughtForm setThoughts={setThoughts} /> */}
          <ThoughtList thoughts={thoughts} setThoughts={setThoughts} />
        </div>
      )}
    </div>
  );
};



{/* /* //Planning of components

// App Component: Main component that manages state and handles API calls.
// ThoughtList Component: Displays a list of thoughts.
// ThoughtForm Component: Form for adding new thoughts.
// ThoughtHearts Component: Displays each individual thought with a like button. Is also the child of the ThoughtLIst component.  */ }

