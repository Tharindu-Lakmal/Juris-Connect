import React from 'react'
import './Home.css'
import Navbar from '../../components/Header/Navbar'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <h2>Home Page</h2>
      <Footer />
      
    </div>
  )
}

export default Home