import React from 'react'
import './Hero.css'
import SearchBar from '../SearchBar/SearchBar'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-content">
            <h2>Empowering Sri Lankans with Legal Knowledge and Access</h2>

            <SearchBar />
        </div>
    </div>
  )
}

export default Hero