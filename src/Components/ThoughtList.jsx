import { useState, useEffect } from "react";

export const ThoughtList = () => {
  const [loading, setLoading] = useState(false);
  const [thoughts, setThoughtList] = useState([]);

  const fetchData = () => {
    setLoading(true);
    fetch("https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Fetched data:", data); // Log the fetched data
        setThoughtList(data);
      })
      .catch((error) => {
        console.error("Failed to fetch data", error);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        thoughts.map((thought) => <p key={thought._id}>{thought.message}</p>)
      )}
    </div>
  );
};
