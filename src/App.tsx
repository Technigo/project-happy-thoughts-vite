import { useEffect, useState } from "react";
import useGet from "./hooks/useGet";
import usePost from "./hooks/usePost";
import useLocalStorage from "./hooks/useLocalStorage";
import { CreateHappyThought } from "./components/CreateHappyThought";
import { CreateHappyThoughtSkeleton } from "./components/ui/CreateHappyThoughtSkeleton";
import { HappyThought } from "./components/HappyThought";
import { HappyThoughtSkeleton } from "./components/ui/HappyThoughtSkeleton";

export type HappyThoughtType = {
  _id: string;
  message: string;
  hearts: number;
  createdAt: string;
};

export const App = () => {
  const [happyThoughts, setHappyThoughts] = useState<HappyThoughtType[]>([]);
  const [thought, setThought] = useState<string>("");
  const [processingLikes, setProcessingLikes] = useState<{
    [key: string]: boolean;
  }>({});
  const [likedThoughts, setLikedThoughts] = useLocalStorage<string[]>(
    "likedThoughts",
    []
  );

  const {
    data: happyThoughtsData,
    isLoading,
    error,
  } = useGet<HappyThoughtType[]>(
    "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts"
  );

  // Update happyThoughts state when data is fetched
  useEffect(() => {
    if (happyThoughtsData) {
      setHappyThoughts(happyThoughtsData);
    }
  }, [happyThoughtsData]);

  const { postData } = usePost<HappyThoughtType>();

  // Post request when user likes a happy thought
  const handleLike = async (id: string) => {
    // Prevent liking a thought that is already liked
    if (processingLikes[id] || likedThoughts.includes(id)) return;

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

  const handleLikeClick = (id: string) => () => handleLike(id);

  if (error) {
    const errorMessage =
      error.name === "AbortError"
        ? "Request was canceled. Please retry."
        : error.message || "Unknown error occurred";

    return (
      <main>
        <p>Error loading thoughts: {errorMessage}</p>
      </main>
    );
  }

  if (isLoading) {
    return (
      <>
        <main>
          <CreateHappyThoughtSkeleton />
        </main>
        <section aria-label="Latest posted thoughts are loading">
          {Array.from({ length: 20 }, (_, index) => (
            <HappyThoughtSkeleton key={index} />
          ))}
        </section>
      </>
    );
  }

  return (
    <>
      <main>
        <CreateHappyThought
          thought={thought}
          setThought={setThought}
          isLoading={false}
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
