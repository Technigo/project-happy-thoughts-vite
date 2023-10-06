import { Header } from "./components/Header";
import { Feed } from "./components/Feed";
import { Form } from "./components/Form";
import { useEffect, useState } from "react";

export const App = () => {
  const [thoughtsData, setThoughtsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalLikes, setTotalLikes] = useState(
    parseInt(localStorage.getItem("totalLikes")) || 0
  );

  // This will return the latest 20 thoughts data from the API
  const apiUrl = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

  const fetchData = async () => {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Failed to getch thoughts");
      }
      const data = await response.json();
      setThoughtsData(data);
    } catch (error) {
      console.error("Error fetching data", error);
    } finally {
      setLoading(false);
      console.log("Success fetching data");
    }
  };

  useEffect(() => {
    fetchData();
    const intervalId = setInterval(fetchData, 5000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // Whenever totalLikes changes, update it in localStorage
  useEffect(() => {
    localStorage.setItem("totalLikes", totalLikes.toString());
  }, [totalLikes]);

  // Callback-function for when a new thought is submitted.
  const addNewThought = (newThought) => {
    const uniqueKey = Date.now(); // Use a timestamp as a unique key (you can use a more robust method if needed)
    // Create a new thought object with the unique key
    const thoughtWithKey = {
      ...newThought,
      _id: uniqueKey, // Assuming you use `_id` for the key
    };
    // Updating `messageList` state by adding `newMessage` at the beginning of the array
    setThoughtsData([thoughtWithKey, ...thoughtsData]);
  };

  return (
    <>
      <Header totalLikes={totalLikes} />
      <div className="main-wrapper">
        <Form
          newThought={addNewThought}
          apiUrl={apiUrl}
          fetchData={fetchData}
        />
        {loading ? (
          <p>LOADING.,...</p>
        ) : (
          <Feed
            thoughtsData={thoughtsData}
            onLikeChange={(likeChange) =>
              setTotalLikes(totalLikes + likeChange)
            }
          />
        )}
      </div>
    </>
  );
};
