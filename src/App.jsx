import { useState, useEffect } from "react";
import { SingleThought } from "./component/singleThought";
export const App = () => {
  const [thoughts, setThoughts] = useState([]);

    useEffect (()=>{
        fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts')
        .then(res => res.json())
        .then(data => setThoughts(data))
        .catch(error => console.error('Error fetching data:', error))
    }, []);
  return (
    <>
    <div>Hello</div>
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
