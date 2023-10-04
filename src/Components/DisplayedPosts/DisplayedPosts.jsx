import styles from './DisplayedPosts.module.css';
//alle komentarer flyttet til priv.notat, fjerne resten senere


export const DisplayedPosts = ({ thoughts }) => {


    //what to render. Må nok endre denne delen når jeg setter underveis som andre compnents oppdaterers 
    return (
        <div className={styles.main_wrapper}>
            {thoughts.map(post =>
                <div key={post._id} className={styles.posts}><p>{post.message}</p><p>{post.hearts} ♥</p></div>)}
        </div>
    );
};




/* EXAMPLE FROM API
{
    "_id": "651c42018ed8e900112e0503",
    "message": "A Happy thought",
    "hearts": 0,
    "createdAt": "2023-10-03T16:32:01.498Z",
    "__v": 0
  },
*/

//Tuesday lesson: Se eksempel på bruk av en slik component