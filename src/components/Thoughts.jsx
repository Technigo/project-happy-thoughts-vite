import { useState, useEffect } from 'react';

export const Thoughts = () => {
  const [thoughts, setThoughts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchThoughts = async () => {
    try {
      const response = await fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
      const data = await response.json()
      if (data) {
        console.log(data)
        setThoughts(data)
      }
    } catch (error) {
      console.error("Error fetching thoughts", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchThoughts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='wrapper'>
      {thoughts.map((thought, index) => (
        <div key={index}>{thought.message}</div>
      ))}
    </div>
  );
};

// this component fetches the thoughts from the API when it mounts using the 'useEffect' hook with an empty dependency array
//data is fetched and stored in the 'thoughts' state
//then the component renders each thought as a separate 'div'
