interface Thought {
  _id: string;
  message: string;
  hearts: number;
  createdAt: string;
}

interface ThoughtsListProps {
  thoughts: Thought[];
  onThoughtLiked: (thoughtId: string) => void;
}

const ThoughtsList: React.FC<ThoughtsListProps> = ({ thoughts, onThoughtLiked }) => {
  const handleLike = async (thoughtId: string): Promise<void> => {
    try {
      const response = await fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thoughtId}/like`, {
        method: 'POST',
      });
      if (response.ok) {
        onThoughtLiked(thoughtId);
      } else {
        console.error('Failed to like the thought');
      }
    } catch (error) {
      console.error('Error liking the thought:', error);
    }
  };

  const formatTimeAgo = (createdAt: string): string => {
    const now = new Date();
    const postDate = new Date(createdAt);
    const diffInMs = now.getTime() - postDate.getTime();
    const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    if (diffInMinutes < 60) {
      return `${diffInMinutes} minute${diffInMinutes !== 1 ? 's' : ''} ago`;
    } else if (diffInHours < 24) {
      return `${diffInHours} hour${diffInHours !== 1 ? 's' : ''} ago`;
    } else {
      return `${diffInDays} day${diffInDays !== 1 ? 's' : ''} ago`;
    }
  };

  return (
    <>
      <ul>
        {thoughts.map((thought) => (
          <li key={thought._id}>
            <p className="thought-p">{thought.message}</p>
            <div className="heart-time-div">
              <div className="heart-info">
                <button className="heart-button" onClick={() => handleLike(thought._id)}>❤️</button>
                <p> x {thought.hearts}</p>
              </div>
              <p className="posted-time">{formatTimeAgo(thought.createdAt)}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ThoughtsList;
