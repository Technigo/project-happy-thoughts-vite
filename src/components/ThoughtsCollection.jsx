import { useState, useEffect } from "react";
import ThoughtCard from "./ThoughtCard";
import CreateThought from "./CreateThought";
import styles from "./ThoughtsCollection.module.css";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/loading_animation.json";
import errorAnimation from "../assets/error_animation.json";
import smileAnimation from "../assets/smile_animation.json";
import { formatDistance } from "date-fns";
import Counter from "./Counter";

const thoughtsURL = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

const ThoughtsCollection = () => {
  const [thoughts, setThoughts] = useState(null);
  const [message, setMessage] = useState("");
  const [likedPosts, setLikedPosts] = useState([]);
  const [sentPosts, setSentPosts] = useState([]);
  const [validated, setValidated] = useState(true);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

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
        // console.error("Error fetching thoughts: ", error.message);

        setError(`Error fetching thoughts: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const createThought = event => {
    event.preventDefault();
    if (message.trim().length >= 5 && message.trim().length <= 140) {
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
          setSentPosts([data._id, ...sentPosts]);
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
    <div className={styles.thoughtContainer}>
      <div className={styles.lottieContainer}>
        {error ? (
          <div className={styles.error}>
            <Lottie
              className={styles.errorAni}
              animationData={errorAnimation}
              loop={true}
            />
            <p className={styles.errorMsg}>{error}</p>
          </div>
        ) : (
          <div className={styles.aniContainer}>
            <Lottie
              animationData={smileAnimation}
              loop={false}
              interactivity={{
                mode: "cursor",
                actions: [
                  {
                    position: { x: [0, 1], y: [0, 1] },
                    type: "loop",
                    frames: [0, 128],
                  },
                  {
                    position: { x: -1, y: -1 },
                    type: "stop",
                    frames: [0],
                  },
                ],
              }}
            />
          </div>
        )}
      </div>
      <CreateThought
        onSubmit={createThought}
        value={message}
        onChange={handleInputChange}
      />
      <Counter likedNum={likedPosts.length} postedNum={sentPosts.length} />
      {/* {!validated ||
        (error && (
          <div className={styles.error}>
            <Lottie
              className={styles.errorAni}
              animationData={errorAnimation}
              loop={true}
            />
            <p className={styles.errorMsg}>
              {error}
            </p>
          </div>
        ))} */}

      <div className={styles.thoughts}>
        {thoughts
          ? thoughts.map((thought, index) => (
              <ThoughtCard
                key={thought._id}
                message={thought.message}
                likes={thought.hearts}
                // time={TimeCalculator(thought.createdAt)}
                time={formatDistance(new Date(thought.createdAt), new Date(), {
                  addSuffix: true,
                  includeSeconds: true,
                })}
                thoughtID={thought._id}
                cardIndex={index}
                recordLikes={recordLikedPosts}
              />
            ))
          : loading && <Lottie animationData={loadingAnimation} loop={true} />}
      </div>
    </div>
  );
};

export default ThoughtsCollection;
