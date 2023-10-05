import { useState } from 'react';
import styles from './HeartClick.module.css';

export const HeartClick = ({ heartLikes, onLike }) => {


  const [likes, setLikes] = useState(heartLikes.hearts);
  const handleHeartClick = async () => {
    setLikes(prevLikes => prevLikes + 1);

    const heartURL = `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${heartLikes._id}/like`;

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
      //forstå bedre
      setLikes(prevLikes => prevLikes - 1);
      console.error("Error updating the heart count:", error);
    }
  }
  return (
    <div className={styles.heartLike_wrapper}>
      <button className={styles.heartButton}
        onClick={handleHeartClick}>
        <span className={styles.emoji} aria-label="heart emojii">❤️</span>
      </button>
      <span className={styles.likeNumber} aria-label="likeNum">x{likes}</span>
    </div>
  )
};
//return can only return a single parent element, remember to wrap into one. in this case button and span. 
