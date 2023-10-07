import { useState } from 'react';
import styles from './HeartClick.module.css';

export const HeartClick = ({ heartLikes, onLike }) => {


  const [likes, setLikes] = useState(heartLikes.hearts);
  const [isLiked, setIsLiked] = useState(false);

  const handleHeartClick = async () => {
    setLikes(prevLikes => prevLikes + 1);
    setIsLiked(true);

    const heartURL = `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${heartLikes._id}/like`;
    //use ``!! and not '' or ""
    //back ticks when ${} - they are Template literals 
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

    try {
      const update = await fetch(heartURL, {
        method: 'POST',
      });
      if (!update.ok) {
        throw new Error('Failed to update heart count');
      }
      if (onLike) {
        onLike(heartLikes._id);
      }
    } catch (error) {
      console.error("Error updating the heart count:", error);
    }
  }

  return (
    <div className={styles.heartLike_wrapper}>
      <button className={`${styles.heartButton} ${isLiked ? styles.liked : ''}`}
        onClick={handleHeartClick}>
        <span className={styles.emoji} aria-label="heart emojii">❤️</span>
      </button>
      <span className={styles.likeNumber} aria-label="likeNum">×{likes}</span>
    </div>
  )
};
//return can only return a single parent element, remember to wrap into one. in this case button and span. 

