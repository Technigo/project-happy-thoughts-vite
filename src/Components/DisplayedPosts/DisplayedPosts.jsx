import styles from './DisplayedPosts.module.css';
import { TimeDate } from '../TimeDate/TimeDate.jsx';
import { HeartClick } from '../HeartClick/HeartClick.jsx';


export const DisplayedPosts = ({ thoughts }) => {


    return (
        <div className={styles.main_wrapper}>
            {thoughts.map(post => (
                <div key={post._id} className={styles.posts}>
                    <p>{post.message}</p>
                    <div className={styles.bottomLine}>
                        <HeartClick heartLikes={post} />
                        <TimeDate timePosted={{ time: post.createdAt }} />
                    </div>
                </div>
            ))}
        </div>
    );
}
//https://www.w3schools.com/jsref/jsref_stringify.asp
