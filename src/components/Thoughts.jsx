
import { useState,useEffect } from "react"
import { URL } from "./ApiUrl";
import { formatDistance } from 'date-fns';

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


  
  return (
    <section>
      <ul>
      {thoughts.map((thought) => (
          <li key={thought._id}>
            <p>{thought.message}</p> 
            <div>
              <p>LIKE && NR</p>
              <p>{formatDistance(new Date(thought.createdAt), Date.now(), { addSuffix: true })}</p> {/*npm install date-fns --save*/}
            </div>
          </li> // I tried using both index and thought._id. the second option uses the unique number for each message whereas index creates its own unique numbers.
        ))};
      </ul>
    </section>
  );
};



