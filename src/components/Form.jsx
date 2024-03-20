import React from 'react'
import "./Form.css"
import { Inputbox } from './Inputbox'
import { Postbox } from './Postbox'

export const Form =()=> {
  return (
    <div className='form'>
      <Inputbox />
      <Postbox />
    </div>
  )
}
