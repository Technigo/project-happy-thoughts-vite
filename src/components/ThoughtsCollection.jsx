import { useState, useEffect } from "react";
import ThoughtCard from "./ThoughtCard";
import CreateThought from "./CreateThought";
import styles from "./ThoughtsCollection.module.css";
import TimeCalculator from "./TimeCalculator";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/loading_animation.json";

const thoughtsURL = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

const ThoughtsCollection = () => {
  const [thoughts, setThoughts] = useState(null);
  const [message, setMessage] = useState("");
  const [likedPosts, setLikedPosts] = useState([]);
  const [validated, setValidated] = useState(true);
  const [error, setError] = useState("");

  const recordLikedPosts = thoughtID => {
    if (likedPosts.includes(thoughtID)) return;
    setLikedPosts([...likedPosts, thoughtID]);
  };

  const handleInputChange = event => {
    setValidated(true);
    const userInput = event.target.value;
    setMessage(userInput);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(thoughtsURL);
        if (!res.ok) {
          console.log(res);
          throw new Error("Failed to fetch thoughts");
        }
        const data = await res.json();
        setThoughts(data);
      } catch (error) {
        console.error("Error fetching thoughts: ", error.message);
      }
    };
    fetchData();
  }, []);

  const createThought = event => {
    event.preventDefault();
    if (message.length >= 5 && message.length <= 140) {
      const postThought = async () => {
        try {
          const res = await fetch(thoughtsURL, {
            headers: {
              "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({ message: message }),
          });
          if (!res.ok) {
            console.log(res);
            throw new Error("Failed to post thoughts");
          }
          const data = await res.json();
          setThoughts([data, ...thoughts]);
        } catch (error) {
          console.error("Error posting thoughts: ", error.message);
        }
      };
      postThought();
      setMessage("");
    } else {
      setValidated(false);
    }
    //TODO: add error messages for invalid input
  };

  //FIXME: props for thought card
  return (
    <div>
      <CreateThought
        onSubmit={createThought}
        value={message}
        onChange={handleInputChange}
      />

      <ul className={styles.items}>
        <li className={styles.item}>
          <div className={styles.inner}>
            <h2 className={styles.name}>{likedPosts.length}</h2>
            <p className={styles.descr}>Liked Thoughts</p>
          </div>
        </li>
        <li className={styles.item}>
          <div className={styles.inner}>
            <h2 className={styles.name}>0</h2>
            <p className={styles.descr}>Posted Thoughts</p>
          </div>
        </li>
        {/* <li className={styles.item}>
          <div className={styles.inner}>
            <h2 className={styles.name}>0</h2>
            <p className={styles.descr}>Total Thoughts</p>
          </div>
        </li> */}
      </ul>
      {!validated && <p>You should type within 5 to 140 words</p>}
      <div className={styles.thoughts}>
        {thoughts ? (
          thoughts.map((thought, index) => (
            <ThoughtCard
              key={thought._id}
              message={thought.message}
              likes={thought.hearts}
              time={TimeCalculator(thought.createdAt)}
              thoughtID={thought._id}
              cardIndex={index}
              recordLikes={recordLikedPosts}
            />
          ))
        ) : (
          <Lottie animationData={loadingAnimation} loop={true} />
        )}
      </div>
    </div>
  );
};

export default ThoughtsCollection;
