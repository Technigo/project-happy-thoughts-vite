import { useState, useEffect } from "react";
import { SingleThought } from "./component/singleThought";
import {PostForm} from "./component/postForm/PostForm";
export const App = () => {
  const [thoughts, setThoughts] = useState([]);

    // useEffect (()=>{
    //     fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts')
    //     .then(res => res.json())
    //     .then(data => setThoughts(data))
    //     .catch(error => console.error('Error fetching data:', error))
    // }, []);
    useEffect(()=>{
      const fetchData = async () =>{
        try {
          const res = await fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts')
          const data = await res.json()
          setThoughts(data)
        } catch (error) {
          console.error('Error fetching data:', error)
        }
      }
      fetchData()

      const intervalID = setInterval(fetchData, 5000)

      return () => {
        clearInterval(intervalID)
      }
    }, [])
    
  return (
    <>
    <div>Happy Thoughts 💌</div>
      <div className="sent-thought-wrapper">
        <PostForm />
      </div>
      <div className="get-thought-wrapper">
        {thoughts.map((thought)=>{
          return(
            <SingleThought key={thought.id} message={thought.message} hearts={thought.hearts} createdAt={thought.createdAt} />
          ) 
        }
        )}
      </div>
    </>
  )
};
