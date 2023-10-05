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
  }, []);

  // Whenever totalLikes changes, update it in localStorage
  useEffect(() => {
    localStorage.setItem("totalLikes", totalLikes.toString());
  }, [totalLikes]);

  // Callback-function for when a new thought is submitted.
  const addNewThought = (newThought) => {
    // Updating `messageList` state by adding `newMessage` at the beginning of the array
    setThoughtsData([newThought, ...thoughtsData]);
  };

  return (
    <div className="main-wrapper">
      <Header totalLikes={totalLikes} />
      <Form
        thoughtsData={thoughtsData}
        newThought={addNewThought}
        apiUrl={apiUrl}
      />
      <Feed
        thoughtsData={thoughtsData}
        onLikeChange={(likeChange) => setTotalLikes(totalLikes + likeChange)}
      />
    </div>
  );
};

// const intervalId = setInterval(fetchData, 5000);
// return () => {
//   clearInterval(intervalId);
// };
