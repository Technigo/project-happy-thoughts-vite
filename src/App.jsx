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

  const incrementLikedPostsCount = () => {
    setLikedPostsCount((prevCount) => {
      const newCount = prevCount + 1;
      localStorage.setItem("likedPostsCount", newCount.toString());
      return newCount;
    });
  };

  useEffect(() => {
    fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
      .then((response) => response.json())
      .then((data) => setThoughts(data))
      .catch((error) => console.error(error));
  }, []);

  const addThought = (newThought) => {
    setThoughts((prevThoughts) => [newThought, ...prevThoughts]);
  };

  return (
    <div>
      <Header />
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
