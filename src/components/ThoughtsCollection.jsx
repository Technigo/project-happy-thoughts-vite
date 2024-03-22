import { useState, useEffect } from "react";
import ThoughtCard from "./ThoughtCard";
import ThoughtForm from "./ThoughtForm";
import styles from "./ThoughtsCollection.module.css";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/loading_animation.json";
// import { formatDistance } from "date-fns";
import TimeDistance from "./TimeDistance";
import Counter from "./Counter";
import HandleError from "./HandleError";
import emptySearch from "../assets/emptySearch.json";

const thoughtsURL = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

const ThoughtsCollection = () => {
  const [thoughts, setThoughts] = useState(null);
  const [message, setMessage] = useState("");
  const [likedPosts, setLikedPosts] = useState([]);
  const [sentPosts, setSentPosts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [filteredPosts, setFilteredPosts] = useState(null);

  //README: GET request to fetch and set data
  const fetchData = async () => {
    setLoading(true);
    setFilteredPosts(null);
    try {
      const res = await fetch(thoughtsURL);
      if (!res.ok) {
        console.log(res);
        throw new Error("Failed to fetch thoughts");
      }
      const data = await res.json();
      setThoughts(data);
    } catch (error) {
      setError(`Error fetching thoughts: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  //README: add the id of liked posts to the state
  const recordLikedPosts = thoughtID => {
    if (likedPosts.includes(thoughtID)) return;
    setLikedPosts([...likedPosts, thoughtID]);
  };

  //README: reset the error and record the value of text input
  const handleInputChange = event => {
    setError("");
    const userInput = event.target.value;
    setMessage(userInput);
  };

  //README: useEffect to render API data on mount
  useEffect(() => {
    fetchData();
  }, []);

  //README: Post request on form submit, also validate the input
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
          setError(`Error posting thoughts: ${error.message}`);
        }
      };
      postThought();
      setMessage("");
    } else {
      setError("Input invalid: You must type within 5 to 140 words");
    }
  };

  //README: filter and set the thoughts
  const filterThoughts = event => {
    const filterType = event.target.title;
    switch (filterType) {
      case "Sent thoughts":
        setFilteredPosts(
          thoughts.filter(thought => sentPosts.includes(thought._id))
        );
        break;
      case "Liked thoughts":
        setFilteredPosts(
          thoughts.filter(thought => likedPosts.includes(thought._id))
        );
        break;
      default:
        fetchData();
    }
  };

  return (
    <div className={styles.thoughtContainer}>
      <HandleError error={error} />
      <ThoughtForm
        onSubmit={createThought}
        value={message}
        onChange={handleInputChange}
      />
      <Counter
        likedNum={likedPosts.length}
        postedNum={sentPosts.length}
        onClick={filterThoughts}
      />
      <div className={styles.thoughts}>
        {filteredPosts && filteredPosts.length === 0 && (
          <Lottie animationData={emptySearch} loop={true} />
        )}
        {thoughts &&
          (filteredPosts && filteredPosts.length >= 0
            ? filteredPosts
            : thoughts
          ).map(thought => (
            <ThoughtCard
              key={thought._id}
              message={thought.message}
              likes={thought.hearts}
              time={TimeDistance(thought.createdAt)}
              thoughtID={thought._id}
              recordLikes={recordLikedPosts}
              handleError={error =>
                setError(`Failed to post likes: ${error.message}`)
              }
            />
          ))}
        {loading && <Lottie animationData={loadingAnimation} loop={true} />}
      </div>
    </div>
  );
};

export default ThoughtsCollection;
