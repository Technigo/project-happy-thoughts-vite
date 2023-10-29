import { useState, useEffect } from "react";
import { Header } from "./Components/Header";


export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  
  const [error, setError] = useState(null);
  
  const handleNewThought = (newThought) => {
    setThoughts([newThought, ...thoughts]);
  };

  const fetchThoughts = async () => {
    try {
      const response = await fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts');
      const data = await response.json();
      setThoughts(data);
    } catch (error) {
      console.error('Error fetching thoughts', error);
    }
  };

  useEffect(() => {
    fetchThoughts();
  }, []);
  
  
  return (
    <div className='main-wrapper'>
      <Header />
      <NewThoughts onNewThought={handleNewThought} />
      <ThoughtList thoughts={thoughts} fetchThoughts={fetchThoughts} />
    </div>
  );
};
