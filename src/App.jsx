import { useState, useEffect } from "react";
import { Header } from "../src/Components/Header";
import { MainSection } from "./Components/MainSection";
import { Loading } from "./Components/Loading";

export const App = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);
  const [isLoad, setIsLoad] = useState(true);

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
      {!isLoad && (
        <>
          <Header />
          <MainSection posts={posts} setPosts={setPosts} error={error} />
        </>
      )}
    </>
  );
};
