import { useEffect, useState } from "react";
import useGet from "./hooks/useGet";
import usePost from "./hooks/usePost";
import useLocalStorage from "./hooks/useLocalStorage";
import { renderSkeletonLoader } from "./utils/renderSkeletonLoader";
import { CreateHappyThought } from "./components/CreateHappyThought";
import { HappyThought } from "./components/HappyThought";

export const App = () => {
  const [happyThoughts, setHappyThoughts] = useState([]);
  const [thought, setThought] = useState("");
  const [processingLikes, setProcessingLikes] = useState({});
  const [likedThoughts, setLikedThoughts] = useLocalStorage(
    "likedThoughts",
    []
  );

  const {
    data: happyThoughtsData,
    isLoading,
    error,
  } = useGet("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts");

  // Update happyThoughts state when data is fetched
  useEffect(() => {
    if (happyThoughtsData) {
      setHappyThoughts(happyThoughtsData);
    }
  }, [happyThoughtsData]);

  const { postData } = usePost();

  // Post request when user likes a happy thought
  const handleLike = async (id) => {
    if (processingLikes[id]) return; // Prevent duplicate processing

    setProcessingLikes((prev) => ({ ...prev, [id]: true }));

    try {
      await postData(
        `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${id}/like`
      );

      // Update happyThoughts state to increment the likes count
      setHappyThoughts((prevThoughts) =>
        prevThoughts.map((thought) =>
          thought._id === id
            ? { ...thought, hearts: thought.hearts + 1 }
            : thought
        )
      );

      // Update likedThoughts
      setLikedThoughts((prevLiked) => [...prevLiked, id]);
    } catch (err) {
      console.error("Failed to like the happy thought:", err);
    } finally {
      setProcessingLikes((prev) => ({ ...prev, [id]: false }));
    }
  };

  const handleLikeClick = (id) => () => handleLike(id);

  if (error) {
    return <main>Error loading thoughts: {error.message}</main>;
  }

  if (isLoading) {
    return (
      <main>{renderSkeletonLoader(HappyThought, 20, { isLoading: true })}</main>
    );
  }

  return (
    <>
      <main>
        <CreateHappyThought
          thought={thought}
          setThought={setThought}
          happyThoughts={happyThoughts}
          setHappyThoughts={setHappyThoughts}
        />
      </main>
      <section aria-label="Latest posted thoughts">
        {happyThoughts.map((happyThought) => (
          <HappyThought
            key={happyThought._id}
            message={happyThought.message}
            likes={happyThought.hearts}
            timestamp={happyThought.createdAt}
            isLoading={false}
            onLike={handleLikeClick(happyThought._id)}
            isProcessing={!!processingLikes[happyThought._id]}
            isAlreadyLiked={likedThoughts.includes(happyThought._id)}
          />
        ))}
      </section>
    </>
  );
};
