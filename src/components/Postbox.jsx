import { useEffect, useState } from 'react'
import "./Postbox.css"


export const Postbox =() => {
  const [thoughts, setThoughts]=useState([])
  
  useEffect(()=>{
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts')
    .then(res=>res.json())
    .then(
      json=>{
        const sortedThoughts =json.sort((a,b)=>b.createdAt-a.createdAt);
        setThoughts(sortedThoughts);
      }
    )
    .catch(error=>{
      console.error('Error:', error);
    })
  },[])

  const handleHeartClick = (thoughtId) => {
    const updatedThoughts = thoughts.map(thought => {
      if (thought._id === thoughtId) {
        return { ...thought, hearts: thought.hearts + 1 };
      }
      return thought;
    });
    setThoughts(updatedThoughts);
  }
  
  return (
    <div className='postbox'>
      {thoughts?.map(thought=>(
        <div className='boxContainer' key={thought._id+"&"+thought.createdAt} >
          <h4 className='message'>{thought.message}</h4>
          <div className='hearts'> 
            <button className='heartButton' onClick={() => handleHeartClick(thought._id)}>❤️</button>
            <div className='heartNumber'> x {thought.hearts}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
