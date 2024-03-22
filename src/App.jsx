import { useEffect, useState } from "react";
import { InputSection } from "./component/input-section/InputSection";
import { PostSection } from "./component/post-section/PostSection";

export const App = () => {
  const url = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";
  const [postData, setPostData] = useState([]);
  const [postUpdate, setPostUpdate] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to load data...");
        }

        const data = await response.json();
        setPostData(data);
      } catch (err) {
        console.error("Error:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    //refresh the postData every 20s
    const intervalId = setInterval(() => {
      fetchData();
    }, 20000);
    return () => clearInterval(intervalId);
  }, [postUpdate]);

  const handleUpdate = async () => {
    setPostUpdate(true);
    setTimeout(() => setPostUpdate(false), 1000);
  };

  return (
    <main>
      <InputSection handleUpdate={handleUpdate} />
      {isLoading ? (
        <p className="loading-text">Loading...</p>
      ) : (
        <PostSection postData={postData} handleUpdate={handleUpdate} />
      )}
    </main>
  );
};
