import { useEffect, useState } from "react";

const API_URL = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

const App = () => {
  const [thoughts, setThoughts] = useState([]);

  useEffect(() => {
    fetch(API_URL)
    .then(response => response.json())
    .then(data => setThoughts(data))
    .catch(error => console.error("Error fetching data:", error));
 }, []);

 return (
  <div>
    <h1>Happy Thoughts</h1>
    <ThoughtForm /> {/* Component to submit new thoughts */ }
    <ToughtList thoughts={thoughts} /> {/* Render list of thoughts */}
  </div>
 )
}