import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { AiOutlineGithub } from "react-icons/ai";

function Footer() {
  return (
    <div className='footer-container'>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              ADJ
            </Link>
          </div>
          <small className='website-rights'>ADJ © 2023 </small>
          <div className='social-icons'>
            <Link className='social-icon-link github' to='/' target='_blank' aria-label='GitHub'>
              <AiOutlineGithub/>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer