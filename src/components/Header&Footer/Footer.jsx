import React from 'react'
import "./Footer.css"
import gitIcon from './icons8-github.svg'

export const Footer = () => {
  return (
    <div className='footer'>
      <section className='copyright'>©JingHuang</section>
      <section className='link'>
        <a href="https://github.com/jingh999">
          <img src={gitIcon} alt="github-icon" />
        </a>
      </section>
    </div>
  )
}
