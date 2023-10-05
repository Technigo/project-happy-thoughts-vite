import { Header } from "./components/Header";
import { Feed } from "./components/Feed";
import { Form } from "./components/Form";
import { useEffect, useState } from "react";

export const App = () => {
  const [thoughtsData, setThoughtsData] = useState([]);

  // This will return the latest 20 thoughts data from the API
  const apiUrl = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

  const fetchData = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setThoughtsData(data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="main-wrapper">
      <Header />
      <Form thoughtsData={thoughtsData} />
      <Feed thoughtsData={thoughtsData} fetchData={fetchData} />
    </div>
  );
};

// const intervalId = setInterval(fetchData, 5000);
// return () => {
//   clearInterval(intervalId);
// };
