import React from 'react'
import { Button } from './Button'
import './HeroSection.css';
import '../App.css'

function HeroSection() {
  return (
    <div className='hero-container'>
        {/*https://www.youtube.com/watch?v=c6UNV7gJt8Y&ab_channel=Pexels*/}
        <video src='/videos/video-3.mp4' autoPlay loop muted/>
        <h1>Lets Study</h1>
        <p>What are you waiting for?</p>
        <div className='hero-bts'>
            <Button to='/browser' className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Get Started</Button>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>Watch Trailer</Button>
        </div>
    </div>
  )
}

export default HeroSection