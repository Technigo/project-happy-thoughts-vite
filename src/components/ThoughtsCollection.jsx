import Lottie from "lottie-react";
import { useEffect, useState } from "react";

import emptySearch from "../assets/emptySearch.json";
import loadingAnimation from "../assets/loading_animation.json";
import { useThoughtStore } from "../stores/useThoughtStore";
import Counter from "./Counter";
import HandleError from "./HandleError";
import ThoughtCard from "./ThoughtCard";
import ThoughtForm from "./ThoughtForm";
import styles from "./ThoughtsCollection.module.css";

const ThoughtsCollection = () => {
  const {
    thoughts,
    loading,
    error,
    fetchThoughts,
    postThought,
    setError,
    filter,
    likedThoughts,
    sentThoughts,
  } = useThoughtStore();
  const [message, setMessage] = useState("");

  //reset the error and record the value of text input
  const handleInputChange = event => {
    setError();
    const userInput = event.target.value;
    setMessage(userInput);
  };

  //useEffect to render API data on mount
  useEffect(() => {
    fetchThoughts();
  }, [fetchThoughts]);

  // Post request on form submit, also validate the input
  const createThought = event => {
    event.preventDefault();
    if (message.trim().length >= 5 && message.trim().length <= 140) {
      postThought(message);
      setMessage("");
    } else {
      setError("Input invalid: You must type within 5 to 140 words");
    }
  };

  return (
    <div>
      <HandleError error={error} />
      <ThoughtForm
        onSubmit={createThought}
        input={message}
        onChange={handleInputChange}
      />
      {thoughts && <Counter />}
      <div className={styles.thoughts}>
        {
          //filteredPost empty or null -> empty search
          (filter === "likes"
            ? likedThoughts
            : filter === "posts"
            ? sentThoughts
            : null
          )?.length === 0 && <Lottie animationData={emptySearch} loop={true} />
        }
        {
          //thoughts is not null and renders based on the filteredPosts
          thoughts &&
            (filter === "likes"
              ? likedThoughts
              : filter === "posts"
              ? sentThoughts
              : thoughts
            ).map(thought => (
              <ThoughtCard
                thought={thought}
                key={thought._id}
              />
            ))
        }
        {loading && <Lottie animationData={loadingAnimation} loop={true} />}
      </div>
    </div>
  );
};

export default ThoughtsCollection;
