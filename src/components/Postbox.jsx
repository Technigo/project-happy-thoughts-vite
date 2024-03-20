import { useEffect, useState } from 'react'
import "./Postbox.css"


export const Postbox =() => {
  const [thoughts, setThoughts]=useState([])
  
  useEffect(()=>{
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts')
    .then(res=>res.json())
    .then(json=>setThoughts(json))
  })


  return (
    <div className='postbox'>
      {thoughts?.map(thought=>(
        <div className='boxContainer' key={thought.id} >
          <h4 className='message'>{thought.message}</h4>
          <div className='hearts'> ❤️ x {thought.hearts}</div>
        </div>
      ))}
    </div>
  )
}
