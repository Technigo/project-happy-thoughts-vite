import React, { useState } from 'react'
import "./Form.css"
import { Inputbox } from './Inputbox'
import { Postbox } from './Postbox'

export const Form =()=> {
  const [newPost, setNewPost] = useState(null)

  const handleNewPost =()=>{
    setNewPost(post);
  }
  return (
    <div className='form'>
      <Inputbox onNewPost={handleNewPost} />
      <Postbox newPost={newPost}/>
    </div>
  )
}
