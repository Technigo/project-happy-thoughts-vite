import { useState, useEffect } from "react";
import { Header } from "../src/Components/Header";
import { MainSection } from "./Components/MainSection";
import { Loading } from "./Components/Loading";

export const App = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);
  const [isLoad, setIsLoad] = useState(true);
  const [visible, setVisible] = useState(false);

  // This is function makes a window to top.
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // For a scroll top button
    // This state checkes when a button needs to be shown depends on scroll height
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 100) {
        setVisible(true);
      } else if (scrolled <= 100) {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  useEffect(() => {
    // loading msaage is shown
    setIsLoad(true);
    setError(false);
    const fetchData = async () => {
      try {
        const response = await fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts");
        if (!response.ok) throw new Error("Could not get data");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(true);
      } finally {
        // to show loading message longer
        setTimeout(() => setIsLoad(false), 3000);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {isLoad && <Loading />}
      {error && (
        <div className="error_page">
          <h2 className="error_h2">Something went wrong with data fechting 👿 </h2>
        </div>
      )}
      {!isLoad && !error && (
        <>
          <Header />
          <MainSection posts={posts} setPosts={setPosts} error={error} windowLoad={isLoad} />
          <button
            onClick={scrollToTop}
            style={{ display: visible ? "inline" : "none" }}
            className="scroll-btn"
          >
            To Top
          </button>
        </>
      )}
    </>
  );
};gi
