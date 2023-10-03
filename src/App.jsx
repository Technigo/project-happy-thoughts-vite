import { useState, useEffect } from 'react';
import { ThoughtList } from './components/ThoughtList/ThoughtList';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [error, serError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts');
        const data = await response.json();
        setThoughts(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <ThoughtList thoughts={thoughts} />
      <Footer />
    </div>
  );
};