import { useState, useEffect } from "react";
import styles from './DisplayedPosts.module.css';
//alle komentarer flyttet til priv.notat, fjerne resten senere


export const DisplayedPosts = () => {

    const [postsDisplayed, setPostsDisplayed] = useState([]);

    const fetchApiPosts = () => {

        fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
            .then((response) => response.json())
            .then((data) => {
                //console.log(data);
                console.log(JSON.stringify(data, null, 2));
                setPostsDisplayed(data);
            })
            //https://www.w3schools.com/jsref/jsref_stringify.asp
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    };

    useEffect(() => {
        fetchApiPosts();
    }, [])

    //what to render. Må nok endre denne delen når jeg setter opp andre Componants 
    return (
        <div className={styles.main_wrapper}>
            {postsDisplayed.map(post =>
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