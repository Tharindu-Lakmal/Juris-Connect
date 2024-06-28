import React from 'react'
import './Lawyers.css'
import { Link } from 'react-router-dom'
import LawyerHero from '../../components/Lawyers/LawyerHero/LawyerHero'
import LawyerSearch from '../../components/Lawyers/LawyerSearch/LawyerSearch'
import LawyerCard from '../../components/Lawyers/LawyerCard/LawyerCard'

const Lawyers = () => {
  return (
    <div className='lawyers'>
        <LawyerHero />
        <LawyerSearch />
        <LawyerCard />
    </div>
  )
}

export default Lawyers