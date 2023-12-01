// Import necessary dependencies and components
import { useState, useEffect } from "react";
import { SendThought } from "./components/SendThought/SendThought.jsx";
import { PostedThoughts } from "./components/PostedThoughts/PostedThoughts.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { Loading } from "./components/Loader/Loading.jsx";

// Define the App component
export const App = () => {
  // State variable to store the list of posted thoughts retrieved from the API
  const [postedThoughts, setPostedThoughts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Define an async function to fetch the thoughts
  const fetchPosts = async () => {
    try {
      // Send a GET request to the API to retrieve the list of thoughts
      const response = await fetch(
        "https://happy-thoughts-api-e1uj.onrender.com/thoughts",
        {
          method: "GET",
        }
      );

      // Check if the response from the API is successful (status code 200)
      if (response.ok) {
        // Parse the response data as JSON and update the state with the list of thoughts
        const data = await response.json();
        setPostedThoughts(data);
        setIsLoading(false);
      } else {
        // If the response is not successful, log an error message
        console.error("Failed to fetch posts");
      }
    } catch (error) {
      // Handle any errors that occur during the fetch operation
      console.error("Error while fetching posts", error);
      setIsLoading(false);
    }
  };

  // Call the fetchPosts function to initiate the data fetching when the component mounts
  useEffect(() => {
    fetchPosts();
    // The empty dependency array ensures that this effect runs only once, when the component mounts
  }, []);

  // Render the components, passing state and functions as props
  return (
    <div className="main-wrapper">
      <div className="header">
        <h1>Project Happy Thoughts</h1>
        <h2>Web Development Boot Camp by Technigo</h2>
      </div>
      <SendThought
        postedThoughts={postedThoughts}
        setPostedThoughts={setPostedThoughts}
        fetchPosts={fetchPosts}
      />
      {isLoading ? <Loading /> : ""}
      <PostedThoughts
        postedThoughts={postedThoughts}
        setPostedThoughts={setPostedThoughts}
      />
      <Footer />
    </div>
  );
};
