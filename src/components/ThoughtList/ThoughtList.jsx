import { Thought } from '../Thought/Thought.jsx'


export const ThoughtList = ({ thoughts, fetchThoughts }) => {

  // Handler for liking a thought
  const handleLike = async (thoughtId) => {
    try {
      const response = await fetch(`https://sandras-happy-thoughts-api.onrender.com/thoughts/${thoughtId}/like`, {
        method: 'POST'
      });

      if (response.ok) {
        // Refresh the list of thoughts after liking a thought
        fetchThoughts();
      } else {
        console.error('Failed to like thought');
      }
    } catch (error) {
      console.error('Error', error);
    }
  };

  return (
    // Render each thought with the option to like it
    <div>
        {thoughts.map(thought => (
            <Thought key={thought._id} {...thought} onLike={handleLike} />
        ))}
    </div>
  );
};
