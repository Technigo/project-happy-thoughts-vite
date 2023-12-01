/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { SingleThought } from "./SingleThought";
import "./ThoughtsList.css";

const ThoughtsList = ({ refreshKey }) => {
  // State for fetched thoughts, loading, and error
  const [thoughts, setThoughts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch thoughts from API
  const fetchThoughts = async () => {
    try {
      const response = await fetch(
        "https://project-happy-api.onrender.com/thoughts"
      );
      // Error handling
      if (!response.ok) {
        throw new Error("Network response not ok");
      }
      // Set thoughts state with fetched data
      const data = await response.json();
      setThoughts(data);
    } catch (error) {
      // Set error if fetch fails
      setError(error);
    } finally {
      // Set loading state to false when fetching is complete
      setLoading(false);
    }
  };

  // Fetch thoughts when mounting and when refreshKey changes
  useEffect(() => {
    fetchThoughts();
  }, [refreshKey]);

  // Component
  return (
    <div className="list-wrapper">
      {/*  Render loading and error messages */}
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <ul>
        {/* Mapping thoughts */}
        {thoughts.map((thought) => (
          <li key={thought._id}>
            <SingleThought message={thought} fetchThoughts={fetchThoughts} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThoughtsList;
