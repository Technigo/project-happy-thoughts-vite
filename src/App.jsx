import { useState, useEffect } from "react";
import { SendThought } from "./components/SendThought/SendThought.jsx";
import { PostedThoughts } from "./components/PostedThoughts/PostedThoughts.jsx";
import { Footer } from "./components/Footer/Footer.jsx";

// Define the App component
export const App = () => {
  const [postedThoughts, setPostedThoughts] = useState([]);

  // Define an async function to fetch the thoughts
  const fetchPosts = async () => {
    try {
      // Send a GET request to the API to retrieve the list of thoughts
      const response = await fetch(
        "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts",
        {
          method: "GET",
        }
      );

      // Check if the response from the API is successful (status code 200)
      if (response.ok) {
        // Parse the response data as JSON and update the state with the list of thoughts
        const data = await response.json();
        setPostedThoughts(data);
      } else {
        // If the response is not successful, log an error message
        console.error("Failed to fetch posts");
      }
    } catch (error) {
      // Handle any errors that occur during the fetch operation
      console.error("Error while fetching posts", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  });
  // Call the fetchPosts function to initiate the data fetching when the component mounts

  return (
    <div className="main-wrapper">
      <h1>Project Happy Thoughts</h1>
      <h2>Web Development Boot Camp by Technigo</h2>
      <SendThought
        postedThoughts={postedThoughts}
        setPostedThoughts={setPostedThoughts}
        fetchPosts={fetchPosts}
      />
      <PostedThoughts
        postedThoughts={postedThoughts}
        setPostedThoughts={setPostedThoughts}
      />
      <Footer />
    </div>
  );
};
