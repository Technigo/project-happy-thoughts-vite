/**
 * 1. Add useEffect to keep track of amount of thoughts a user has liked ✅
 * 2. Add a simple output ✅
 */
import { useState, useEffect } from "react";

export const ThoughtLikesCounter = ({ thoughts }) => {
  const [likedPostsCount, setLikedPostsCount] = useState(0);

  useEffect(() => {
    // Initialize likes from the current user
    let initialLikedPostsCount = 0;

    thoughts.forEach((thought) => {
      // Check if the post has been liked
      const hasLikedBefore = localStorage.getItem(`liked_${thought._id}`);
      if (hasLikedBefore) {
        initialLikedPostsCount++;
      }
    });
    // Update the state with updated likes
    setLikedPostsCount(initialLikedPostsCount);
  }, [thoughts]);

  return <>You have liked ❤️ {likedPostsCount} posts</>;
};
