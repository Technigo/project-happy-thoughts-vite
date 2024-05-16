import { useEffect, useState } from "react";
import Header from "./components/Header";
import Feed from "./components/Feed";
import Footer from "./components/Footer";

const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [likedPostsCount, setLikedPostsCount] = useState(() => {
    const savedCount = localStorage.getItem("likedPostsCount");
    return savedCount ? parseInt(savedCount, 10) : 0;
  });
  const [error, setError] = useState(null);

  const incrementLikedPostsCount = () => {
    setLikedPostsCount((prevCount) => {
      const newCount = prevCount + 1;
      localStorage.setItem("likedPostsCount", newCount.toString());
      return newCount;
    });
  };

  const fetchThoughts = async () => {
    try {
      const response = await fetch(
        "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts"
      );
      const responseJson = await response.json();
      setError(null); // Reset previous error state if there is
      setThoughts(responseJson);
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchThoughts();
    const interval = setInterval(fetchThoughts, 10000); // every 10 secounds, call the fucntion "fetchThoughts" = get data from API
    return () => clearInterval(interval);
  }, []); // making [] empty means nothing = run only once, If it is [thoughts] -> run everytime thoughts updated

  const addThought = (newThought) => {
    setThoughts((prevThoughts) => [newThought, ...prevThoughts]);
  };

  return (
    <div>
      <Header />
      {error && <span>{error}</span>}
      <Feed
        thoughts={thoughts}
        addThought={addThought}
        incrementLikedPostsCount={incrementLikedPostsCount}
        likedPostsCount={likedPostsCount}
      />
      <Footer />
    </div>
  );
};

export default App;
