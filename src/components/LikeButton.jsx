import { useState } from 'react'; 

export const LikeButton = ({ thoughtId, initialHearts }) => {
    const [isLiking, setIsLiking] = useState(false);
    const [hearts, setHearts] = useState(initialHearts);
  
    const handleLike = () => {
      if (isLiking) return;
      
      setIsLiking(true);
      fetch(`https://happy-thoughts-api-hvg8.onrender.com/thoughts/${thoughtId}/like`, {
        method: 'POST'
      })
        .then(res => res.json())
        .then(data => {
          if (data.success) {
            setHearts(data.response.hearts); // Access hearts through data.response
          }
          setIsLiking(false);
        })
        .catch(error => {
          console.error('Error liking thought:', error);
          setIsLiking(false);
        });
    };
  
    return (
      <div className="like-container">
        <button 
          onClick={handleLike}
          className={`heart-button ${isLiking ? 'liking' : ''}`}
          disabled={isLiking}
        >
          ❤️
        </button>
        <span className="heart-count">
          x {hearts}
        </span>
      </div>
    );
};