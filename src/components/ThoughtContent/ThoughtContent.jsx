/**
 * 1. Fetch recent thoughts from the API ✅
 * 2. Import ThoughtFrom and ThoughtList ✅
 * 3. Send in the thoughts to ThoughtList ✅
 * 4. Add a loader ✅
 * 5. Add setInterval and clearInterval ✅
 */

import { useEffect, useState } from "react";
import { makeGetRequest } from "../Api";
import { ThoughtList } from "./ThoughtList";
import { ThoughtForm } from "./ThoughtForm";

export const ThoughtContent = () => {
  const [thoughts, setThoughts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch the latest thought from the API
  useEffect(() => {
    const fetchThoughts = async () => {
      try {
        const data = await makeGetRequest();
        setThoughts(data);
        setLoading(false);
      } catch (error) {
        console.log("No thoughts found", error);
        setLoading(true);
      }
    };

    // Initial fetch when the component mounts
    fetchThoughts();

    const interval = setInterval(() => {
      fetchThoughts();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <ThoughtForm />
      {loading ? <div>Loading...</div> : <ThoughtList thoughts={thoughts} />}
    </>
  );
};

// setInterval method is used inside the useEffect hook to increment the count state variable every second (1000 milliseconds). The
// clearInterval method is used inside the useEffect cleanup function to stop the interval when the component unmounts.
