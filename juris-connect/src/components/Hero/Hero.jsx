import React from 'react'
import './Hero.css'
import SearchBar from '../SearchBar/SearchBar'
import lady_justice from '../../assets/lady_justice.mp4'

const Hero = () => {
  return (
    <div className='hero'>
      
        <div className="hero-content">
          
          <div className="content">
            <h1>
              Sri Lankans with Legal Knowledge and Access
            </h1>
            <p>
              In applications with many components, it’s very important 
              to free up resources taken by the components when they are 
              destroyed.
            </p>
            <div className="hero-search">
              <SearchBar />
            </div>
          </div>

        </div>
    </div>
  )
}

export default Hero