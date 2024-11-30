import { useState, useEffect } from 'react';
import ThoughtsList from "./HappyT.jsx";
import MessageForm from "./Form.jsx";

interface Thought {
  _id: string;
  message: string;
  hearts: number;
  createdAt: string; // Add this property
}


const HappyThoughtsApp = () => {
  const [thoughts, setThoughts] = useState<Thought[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchThoughts = async () => {
      try {
        const response = await fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts');
        if (!response.ok) {
          throw new Error('Failed to fetch thoughts');
        }
        const data: Thought[] = await response.json();
        setThoughts(data);
      } catch (err) {
        console.error('Error fetching thoughts:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchThoughts();
  }, []);

  const addThought = (newThought: Thought) => {
    setThoughts([newThought, ...thoughts]);
  };

  const onThoughtLiked = (thoughtId: string) => {
    setThoughts((prevThoughts) =>
      prevThoughts.map((thought) =>
        thought._id === thoughtId ? { ...thought, hearts: thought.hearts + 1 } : thought
      )
    );
  };

  return (
    <>
      <header><h1>Happy Thoughts Feed 😊</h1></header>
      <main>
        <section className="form-box">
          <MessageForm onThoughtAdded={addThought} />
        </section>
        <section className="thoughts-feed">
          {loading ? (
            <p>Loading thoughts...</p>
          ) : (
            <ThoughtsList thoughts={thoughts} onThoughtLiked={onThoughtLiked} />
          )}
        </section>
      </main>
    </>
  );
};

export default HappyThoughtsApp;
