
import { useState,useEffect } from "react"
import { URL } from "../ApiUrl";
import { formatDistance } from 'date-fns';
import "./thoughts.css";

//A function to fetch and display the message object in a list
export const Thoughts = () => {
  const [thoughts, setThoughts] = useState([])

  useEffect(() => {
    const fetchThoughts = async () => {
      try {
        const response = await fetch(URL)
        const data = await response.json()
        setThoughts(data)
        console.log("Thought is", data)
      } catch (error) {
        console.log("Error fetching Thoughts:", error)
      }
    }
    fetchThoughts()
  }, []);





  const addLike = async (postId) => {
    try {
      fetch(`${URL}/${postId}/like`, {method: "POST"})
  
      //Update the state with a like
      setThoughts((prevThoughts) =>
      prevThoughts.map((thought) =>
      thought._id === postId ? { ...thought, hearts: thought.hearts + 1 } : thought
      ))
    } catch (error) {
      console.error("Error liking th epost is:", error)
    }
  }


  
  return (
    <section>
      <ul className="thoughts-list-container">
      {thoughts.map((thought) => (
          <li 
            className="thought-list-item" 
            key={thought._id}
          >
            <p className="thought-message">{thought.message}</p> 
            <div className="time-count-container">

              <div className="like-container">
                <button
                  aria-label={`Like post with message: ${thought.message}`}
                  className={`like-button ${thought.hearts === 0 ? 'notLikedClass' : 'likedClass'}`}
                  onClick={() => addLike(thought._id)}
                >
                  <span className="heart-icon" aria-label="Like icon">💖</span> {/* Target heart icon */}
                </button>
                <span className="like-count" aria-label="Number of likes"> x {thought.hearts}</span> {/* Display likes outside the button */}
              </div>

              <div className="time-container">
              <p>{formatDistance(new Date(thought.createdAt), Date.now(), { addSuffix: true })}</p> {/*npm install date-fns --save to */}
              </div>
            </div>
          </li> // I tried using both index and thought._id. the second option uses the unique number for each message whereas index creates its own unique numbers.
        ))}
      </ul>
    </section>
  );
};



