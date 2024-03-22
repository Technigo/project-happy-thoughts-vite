import React, { useEffect, useState } from 'react'
import "./Inputbox.css"

export const Inputbox = () => {
  const [post, setPost] = useState("")
  useEffect(()=>{
    console.log("happy thoughts")
  })

  fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', {
    method:'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      _id:"sfas",
      message:{post},
      hearts: 0,
      createdAt: "2024-03-20T11:27:20.775Z",
      __v: 0 
    })
  })
    .then(res=>res.json())
    .then(json=>console.log(json))



  return (
    <div className='inputbox'>
      <h4>What make you happy right now? </h4>
      <form action="">
        <input 
          type="text"
          value={post}
          onChange={(e)=>setPost(e.target.value)}
          placeholder='Write your happy thoughts...'
        />
      </form>
      <button >Send Happy Thoughts</button>
    </div>
  )
}
