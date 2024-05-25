import React, { useState } from 'react'
import "./Form.css"
import { Inputbox } from './Inputbox'
import { Postbox } from './Postbox'

export const Form =()=> {
  const [allNewPosts, setAllNewPosts] = useState([])

  return (
    <div className='form'>
      <Inputbox allPosts={allNewPosts} setAllPosts={setAllNewPosts} />
      <Postbox thoughts={allNewPosts} setThoughts={setAllNewPosts} />
    </div> 
  )
}
