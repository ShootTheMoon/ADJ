import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { AiOutlineGithub } from "react-icons/ai";

function Footer() {
  return (
    <div className='footer-container'>
        {/* <section className='footer-subscription'>
          <p className='footer-subscription-heading'>
            Join our Newsletter to receive updates
          </p>
          <p className='footer-subscription-text'>
            You can unsubscribe anytime
          </p>
          <div className='input-areas'>
            <form>
              <input type='email' name='email' placeholder='Your E-mail' className='footer-input'/>
              <Button buttonStyle='btn--outline'>Subscribe</Button>         
            </form>
          </div>
        </section>
        <div className='footer-links'>
          <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
              <h2>About Us</h2>
              <Link to='/SignUp'>Who we are</Link>
            </div>
          </div>
          <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
              <h2>About Us</h2>
              <Link to='/SignUp'>Who we are</Link>
            </div>
          </div>
        </div> */}
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