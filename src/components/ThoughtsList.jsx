
import { formatDistance } from 'date-fns';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Pagination } from './Pagination';

export const ThoughtsList = ({ loading, thoughtList, setThoughtList }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [message, setMessage] = useState(null);
  const VITE_API_URL = import.meta.env.VITE_API_URL;
  const API = `${VITE_API_URL}`;
  const pagesAPI = `${API}/pages`;
  const limit = 5;


  useEffect(() => {
    const fetchThoughts = async () => {
      try {
        const response = await axios.get(`${API}/thoughts/q?limit=${limit}&page=${currentPage}`);
        const thoughts = response.data; // set the thoughts to the response data
        setThoughtList(thoughts); // Update thoughtList with the fetched thoughts
      } catch (error) {
        setMessage("Failed to fetch thoughts", error);
      }
    };

    const fetchTotalPages = async () => {
      try {
        const response = await axios.get(pagesAPI);
        const { totalPages } = response.data; // Extract totalPages from the response data
        setTotalPages(totalPages);
      } catch (error) {
        setMessage("Failed to fetch total pages", error);
      }
    };

    fetchThoughts();
    fetchTotalPages();
  }, [currentPage, API, setThoughtList, pagesAPI]); // Refetch when currentPage changes


  const handlePageChange = async (page) => {
    try {
      const response = await axios.get(`${API}/thoughts/q?page=${page}&limit=${limit}`);
      const thoughts = response.data; // get the thoughts from the response data
      setThoughtList(thoughts); // Update thoughtList with the fetched thoughts
      setCurrentPage(page);
    } catch (error) {
      setMessage("Failed to fetch thoughts", error);
    }
  };
  if (loading) {
    // display a loading message while the thoughts are being fetched
    return <h1>Loading thoughts...</h1>
  } else if (thoughtList.length === 0) {
    return <h1>No thoughts available</h1>
  }

  // define the prop types for the ThoughtsList component
  ThoughtsList.propTypes = {
    loading: PropTypes.bool.isRequired,
    thoughtList: PropTypes.array.isRequired,
    setThoughtList: PropTypes.func.isRequired,
  };

  const onThoughtLike = (thoughts) => {
    // create a new object with the updated number of hearts
    const updatedThoughtLike = { ...thoughts, hearts: thoughts.hearts + 1 };
    const API_LIKE = `${API}/thoughts/${thoughts._id}/like`;
    const likeThought = {
      method: "POST",
      headers: {
        updatedThoughtLike, "Content-Type": "application/json"
      }, // update the thought with the new number of hearts
      body: JSON.stringify({
        hearts: updatedThoughtLike.hearts
      }),
    };

    // fetch the API with the updated thought
    fetch(API_LIKE, likeThought)
      .then((response) => response.json())
      .catch((error) => {
        setMessage("Failed to like thought", error);
      });

    // update the thought list with the updated thought
    setThoughtList((thoughtList) =>
      thoughtList.map((thoughts) =>
        thoughts._id === updatedThoughtLike._id ? updatedThoughtLike : thoughts
      )
    );
  };

  return (
    <>
      <section className="thoughts shadow">
        {/* map through the thoughtList array and display each thought in a div element */}
        {/* add a button to like the thought and display the number of hearts */}
        {/* add a paragraph element to display the time the thought was created */}
        {
          Object.values(thoughtList)
            .filter((thought) => thought.message && thought.message.length <= 140)
            .map((thought) => (
              <div key={thought._id} className="thought">
                <p>{thought.message}</p>

                <div className="thought-footer">
                  <button
                    aria-label="like button"
                    onClick={() => onThoughtLike(thought)}
                    // add a class name based on the number of hearts
                    className={thought.hearts > 0 ? "liked" : "not-liked"}
                  >
                    ❤️
                  </button>
                  <p className="count">x {thought.hearts}</p>

                  <p className="timestamp">
                    {formatDistance(new Date(thought.createdAt), new Date)} ago
                  </p>
                </div>
              </div>
            ))}
      </section>
      {message && <p>{message}</p>}
      <Pagination
        currentPage={Number(currentPage)}
        totalPages={Number(totalPages)}
        onPageChange={handlePageChange}
      />
    </>
  );
};