import React from 'react'
import './Home.css'
import Hero from '../../components/Hero/Hero'
import PageCard from '../../components/PageCard/PageCard'
import SubHeader from '../../components/SubHeader/SubHeader'
import QCard from '../../components/QCard/QCard'
import LVideos from '../../components/LVideos/LVideos'
import About from '../../components/About/About'

const Home = () => {
  return (
    
    <div className='home'>
      <Hero />
      <PageCard />
      <SubHeader />
      <QCard />
      <LVideos />
      <About />
      
    </div>
  )
}

export default Home