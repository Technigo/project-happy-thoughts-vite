// import React, { useState, useEffect } from 'react';
// import './index.css';

// const HelloWorld = () => {
//   return (
//     <p>HelloWorld!</p>
//   );
// };

// export const App = () => {
//   const [invisible, setInvisible] = useState(false);
//   const [name, setName] = useState("Jennie");

//   useEffect(() => {
//     console.log("App effect", invisible);
//   }, [invisible]);

//   // Function to toggle between "Jennie" and "Bob"
//   const toggleName = () => {
//     if (name === "Jennie") {
//       setName("Bob");
//     } else {
//       setName("Jennie");
//     }
//   };

//   return (
//     <React.Fragment>
//       <button onClick={() => setInvisible(prev => !prev)}>Show / Hide</button>
//       <button onClick={toggleName}>Change Name</button>
//       {invisible && <HelloWorld />}

//       <h1>The textarea element</h1>

//       <form action="/action_page.php">
//         <p><label htmlFor="w3review">Review of W3Schools:</label></p>
//         <textarea id="w3review" name="w3review" rows="4" cols="50">At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.</textarea>
//         <br />
//         <input type="submit" value="Submit" />
//       </form>

//       <p>Click the &quot;Submit&quot; button and the form-data will be sent to a page on the server called  &quot;action_page.php &quot;.</p>
//       <p>Name: {name}</p>
//     </React.Fragment>
//   );
// };

import React, { useState, useEffect } from 'react';
import './index.css'; // Import your CSS file

async function fetchThoughts() {
  try {
    const response = await fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching thoughts:', error);
  }
}

async function submitThought(message) {
  try {
    const response = await fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Handle successful submission
    // You may want to refresh the thoughts list or clear the input field
  } catch (error) {
    console.error('Error submitting thought:', error);
  }
}

export function App() {
  const [thoughts, setThoughts] = useState([]);
  const [newThought, setNewThought] = useState('');
  const [likes, setLikes] = useState({});

  useEffect(() => {
    fetchThoughts().then((data) => {
      setThoughts(data);
    });
  }, []);

  const handleNewThoughtSubmit = async () => {
    try {
      await submitThought(newThought);
      setNewThought(''); // Clear the input field
      // Fetch the updated list of thoughts and update the state
      const updatedThoughts = await fetchThoughts();
      setThoughts(updatedThoughts);
    } catch (error) {
      console.error('Error submitting thought:', error);
    }
  };

  const handleLike = async (thoughtId) => {
    try {
      const response = await fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thoughtId}/like`, {
        method: 'POST',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Update the likes state to reflect the new like count
      setLikes((prevLikes) => ({
        ...prevLikes,
        [thoughtId]: (prevLikes[thoughtId] || 0) + 1,
      }));
    } catch (error) {
      console.error(`Error liking thought ${thoughtId}:`, error);
    }
  };

  return (
    <React.Fragment>
    <div className="app-container">
      <div className="thought-form">
        <textarea
          value={newThought}
          onChange={(e) => setNewThought(e.target.value)}
          placeholder="Enter your thought (140 characters or less)"
          maxLength={140}
        />
        <button onClick={handleNewThoughtSubmit}>Submit</button>
      </div>
      <div className="thought-list">
        {thoughts.map((thought) => (
          <div key={thought._id} className="thought-item">
            <p>{thought.message}</p>
            <button onClick={() => handleLike(thought._id)}>Like</button>
            <span>Likes: {likes[thought._id] || 0}</span>
          </div>
        ))}
      </div>
    </div>
    </React.Fragment>
  );
}




