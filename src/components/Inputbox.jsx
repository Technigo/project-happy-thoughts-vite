import React, { useEffect, useState } from 'react'
import "./Inputbox.css"

export const Inputbox = ({allPosts, setAllPosts}) => {
  const [post, setPost] = useState("");
  const [count, setCount] = useState(0);

  const submitPost =()=>{
    fetch('https://w15-project-happy-thoughts-api.onrender.com/thoughts', {
    method:'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message:post,
    })
  })
    .then(res=>res.json())
    .then(json=>{
      setAllPosts([json, ...allPosts])
      setPost("");
      setCount("0");
    })
    .catch(error=>{
      console.error('Error:', error)
    }) 
  }

  const getClass =()=>{
    if (count< 5 && count >0 ){
      return 'out-of-range'
    } else if(count > 140){
      return 'out-of-range'
    } else {
      return 'count'
    }
  }

  return (
    <div className='inputbox'>
      <h4>What make you happy right now? </h4>
      <form onSubmit={e => { e.preventDefault(); submitPost(); }}>
        <input 
          type="text"
          value={post}
          onChange={(e)=>{
            console.log(e.target.value)
            setPost(e.target.value)
            setCount(e.target.value.length)
          }}
          placeholder='Write your happy thoughts...'
        />
      </form>
      <div className='inputResult'>
        <button onClick={submitPost} className='submitThought'>❤️ Send Happy Thoughts ❤️</button>
        <p className={getClass()}>{count}/140</p>
      </div>
    </div>
  )
}