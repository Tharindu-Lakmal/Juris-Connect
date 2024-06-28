import React from 'react'
import './Hero.css'
import SearchBar from '../SearchBar/SearchBar'
import lady_justice from '../../assets/lady_justice.mp4'

const Hero = () => {
  return (
    <div className='hero'>
        
      <video src={lady_justice} autoPlay loop muted />
      
      <div className="hero-content">
        <div className="content">
          <SearchBar />
          <h1>
            Empowering Sri Lankans with Legal Knowledge and Access
          </h1>
        </div>
      </div>

    </div>
  )
}

export default Hero