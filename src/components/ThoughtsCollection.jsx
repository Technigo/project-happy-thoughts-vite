import Lottie from "lottie-react";
import { useEffect } from "react";

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
    filter,
    likedThoughts,
    sentThoughts,
  } = useThoughtStore();

  //useEffect to render API data on mount
  useEffect(() => {
    fetchThoughts();
  }, [fetchThoughts]);

  return (
    <div>
      <HandleError error={error} />
      <ThoughtForm />
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
              <ThoughtCard thought={thought} key={thought._id} />
            ))
        }
        {loading && <Lottie animationData={loadingAnimation} loop={true} />}
      </div>
    </div>
  );
};

export default ThoughtsCollection;
