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
    console.log('Submitting thought:', message);
    const response = await fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });
    console.log('API response:', response);
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
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    fetchThoughts().then((data) => {
      setThoughts(data);
    });
  }, []);

  // const handleNewThoughtSubmit = async () => {
  //   try {
  //     await submitThought(newThought);
  //     setNewThought(''); // Clear the input field
  //     setCharCount(0); // Reset character count
  //     // Fetch the updated list of thoughts and update the state
  //     const updatedThoughts = await fetchThoughts();
  //     setThoughts(updatedThoughts);
  //   } catch (error) {
  //     console.error('Error submitting thought:', error);
  //   }
  // };
  // const handleNewThoughtSubmit = async () => {
  //   try {
  //     // Update the thoughts state with the new thought immediately
  //     const updatedThoughts = [{ message: newThought }, ...thoughts];
  //     setThoughts(updatedThoughts);
  //     setNewThought(''); // Clear the input field
  //     setCharCount(0); // Reset character count
  
  //     // Now, submit the new thought to the API
  //     await submitThought(newThought);
  
  //     // Fetch the updated list of thoughts and update the state
  //     const response = await fetchThoughts();
  //     setThoughts(response);
  //   } catch (error) {
  //     console.error('Error submitting thought:', error);
  //   }
  // };
  const handleNewThoughtSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    try {
      // Update the thoughts state with the new thought immediately
      const updatedThoughts = [{ message: newThought }, ...thoughts];
      setThoughts(updatedThoughts);
  
      // Now, submit the new thought to the API
      await submitThought(newThought);
  
      // Fetch the updated list of thoughts and update the state
      const response = await fetchThoughts();
      setThoughts(response);
  
      setNewThought(''); // Clear the input field
      setCharCount(0); // Reset character count
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
      <div className="header">
      <h1>Project Happy Thoughts</h1>
      <div className='marquee'>
        <h2>Share your happy thoughts with the world!</h2>
        </div>
      </div>
      <div className="thought-form">
        <h2>What&rsquo;s making you happy right now?</h2>
        <form>
          <textarea
            // value={newThought}
            // onChange={(e) => setNewThought(e.target.value)}
            // placeholder="Enter your thought (140 characters or less)"
            // maxLength={140}
            value={newThought}
            onChange={(e) => {
              const text = e.target.value;
              if (text.length <= 140) {
                setNewThought(text);
                setCharCount(text.length);
              }
            }}
            placeholder="Enter your thought (140 characters or less)"
            maxLength={140}
             
          />
          <div className="post-length">
            <p className="error"></p>
            <p className="length">
              {charCount}/{140}
            </p>
          </div>
          
        
          <button onClick={handleNewThoughtSubmit} id="submitPostBtn" aria-label="button for submitting your post"> 
          <span className="emoji" aria-label="heart emoji">💕 Send Happy Thought</span>
          <span className="emoji" aria-label="heart emoji">💕</span> 
          </button>
          
          
        </form>
        
      </div>
      <div className="thought-list">
        {thoughts.map((thought) => (
          <div key={thought._id} className="thought-item">
            <p>{thought.message}</p>
            <p>Created At: {new Date(thought.createdAt).toLocaleString()}</p>
            <button onClick={() => handleLike(thought._id)}>Like</button>
            <span>Likes: {likes[thought._id] || 0}</span>
          </div>
        ))}
      </div>
    </div>
    </React.Fragment>
  );
}




