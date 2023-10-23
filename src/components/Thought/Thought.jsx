import { getTimeDifferenceString } from '../../Utils/timeUtils';
import './Thought.css';

export const Thought = ({ _id, message, hearts, createdAt, onLike }) => {
const timeDiffrence = getTimeDifferenceString(createdAt);

  return (
    <div className='thought-container'>
        <p>{message}</p>
        <div className='thought-info'>
            <div className='heart-info'>
         <button className='like-button' onClick={() => onLike(_id)}>❤️</button>
         <span className="heart-count">x{hearts}</span>
         {/* Convert the createdAt string to a more readable format if needed */}
         </div>
         <span className='thought-date'>{timeDiffrence}</span>
         
        </div>
    </div>
  );
};
