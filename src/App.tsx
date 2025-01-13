import { useState, useEffect } from "react";
import SubmitForm from "./components/SubmitForm";
import { HappyThought } from "./components/HappyThought";

const URL = "https://project-happy-thoughts-api-ph1w.onrender.com/";

export interface Thought {
  _id: string;
  message: string;
  hearts: number;
  createdAt: string;
}

export const App = (): JSX.Element => {
  const [thoughts, setThoughts] = useState<Thought[]>([]);

  // Fetch the most recent thoughts
  useEffect(() => {
    const fetchThoughts = async (): Promise<void> => {
      try {
        const response = await fetch(URL);
        const result: Thought[] = await response.json();
        setThoughts(result); // Sets the array of 20 latest thoughts
      } catch (error) {
        console.error("Error fetching thoughts:", error);
      }
    };
    fetchThoughts();
  }, []);

  // Adds a new thought to the list
  const addThought = (newThought: Thought): void => {
    setThoughts((prevThoughts) => [newThought, ...prevThoughts.slice(0, 19)]);
  };

  // Like a thought
  const handleLike = async (thoughtId: string): Promise<void> => {
    const likeURL = `${URL}/${thoughtId}/like`;
    try {
      const response = await fetch(likeURL, {
        method: "POST",
      });
      if (response.ok) {
        // Update hearts count for liked thought
        setThoughts((prevThoughts) =>
          prevThoughts.map((thought) =>
            thought._id === thoughtId
              ? { ...thought, hearts: thought.hearts + 1 }
              : thought
          )
        );
      }
    } catch (error) {
      console.error("Error liking the thought:", error);
    }
  };

  return (
    <main className="App">
      <h1>Happy Thoughts 😊</h1>
      <div className="content">
        <SubmitForm onSubmit={addThought} />
        <div className="HappyThoughts">
          {thoughts.map((thought) => (
            <HappyThought
              key={thought._id}
              thought={thought}
              onLike={handleLike}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default App;
