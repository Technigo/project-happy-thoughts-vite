import { useEffect, useState } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import { HappyThought } from "./components/HappyThought";

// Skeleton Loader helper function
const renderSkeletonLoader = (Component, count, props) => {
  const placeholderArray = Array(count).fill();
  return placeholderArray.map((_, index) => (
    <Component key={index} {...props} />
  ));
};

export const App = () => {
  const [happyThoughts, setHappyThoughts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [processingLikes, setProcessingLikes] = useState({});
  const [likedThoughts, setLikedThoughts] = useState([]);

  const fetchHappyThoughts = async () => {
    try {
      const response = await fetch(
        "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts"
      );
      const data = await response.json();
      setHappyThoughts(data);
    } catch (error) {
      console.error("Failed to fetch happy thoughts:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Post request when user likes a happy thought
  const handleLike = async (id) => {
    // Prevent multiple likes by marking thought as "processing" after user clicks
    setProcessingLikes((previousProcessing) => ({
      ...previousProcessing,
      [id]: true,
    }));

    try {
      const response = await fetch(
        `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${id}/like`,
        {
          method: "POST",
        }
      );
      if (response.ok) {
        //Update the local state to reflect the new like count
        setHappyThoughts((previousThoughts) =>
          previousThoughts.map((thought) =>
            thought._id === id
              ? { ...thought, hearts: thought.hearts + 1 }
              : thought
          )
        );

        // Update the likedThoughts array and save it to localStorage
        const updatedLikedThoughts = [...likedThoughts, id];
        setLikedThoughts(updatedLikedThoughts);
        localStorage.setItem(
          "likedThoughts",
          JSON.stringify(updatedLikedThoughts)
        );
      }
    } catch (error) {
      console.error("Failed to like the happy thought:", error);
    } finally {
      // Remove processing state after the liked has been processed
      setProcessingLikes((previousProcessing) => ({
        ...previousProcessing,
        [id]: false,
      }));
    }
  };

  // Load likedThoughts on initial load from localStorage
  useEffect(() => {
    const savedLikedThoughts =
      JSON.parse(localStorage.getItem("likedThoughts")) || [];
    setLikedThoughts(savedLikedThoughts);
  }, []);

  // Fetch happy thoughts on inital load
  useEffect(() => {
    fetchHappyThoughts();
  }, []);

  return (
    <main>
      {isLoading
        ? renderSkeletonLoader(HappyThought, 20, { isLoading: true })
        : happyThoughts.map((happyThought) => (
            <HappyThought
              key={happyThought._id}
              message={happyThought.message}
              likes={happyThought.hearts}
              timestamp={happyThought.createdAt}
              isLoading={false}
              onLike={() => handleLike(happyThought._id)}
              isProcessing={processingLikes[happyThought._id]}
              isAlreadyLiked={likedThoughts.includes(happyThought._id)}
            />
          ))}
    </main>
  );
};
