import React, { useEffect, useState } from 'react'
import "./Inputbox.css"

export const Inputbox = () => {
  const [post, setPost] = useState("");
  const [allPosts, setAllPosts] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(()=>{
    console.log("happy thoughts")
  })

  const submitPost =()=>{
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', {
    method:'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message:post,
      hearts: 0,
    })
  })
    .then(res=>res.json())
    .then(json=>{
      console.log(json)
      setAllPosts([json, ...allPosts])
      setPost("");
      setCount("0");
      //onNewPost(json);
    })
    .catch(error=>{
      console.error('Error:', error)
    })
  }

  
  return (
    <div className='inputbox'>
      <h4>What make you happy right now? </h4>
      
      <form onSubmit={e => { e.preventDefault(); submitPost(); }}>
        <input 
          type="text"
          value={post}
          onChange={(e)=>{
            setPost(e.target.value)
            setCount(e.target.value.length)
          }}
          placeholder='Write your happy thoughts...'
        />
      </form>
      <div className='inputResult'>
        <button onClick={submitPost}>Send Happy Thoughts</button>
        <p className='count'>{count}/140</p>
      </div>
    </div>
  )
}
