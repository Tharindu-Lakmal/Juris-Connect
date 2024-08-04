import React from 'react'
import './LegalQuestion.css'
import Navbar from '../../components/Header/Navbar'
import Footer from '../../components/Footer/Footer'
import LegalQHero from '../../components/LegalQuestions/LegalQHero/LegalQHero'
import LegalQCard from '../../components/LegalQuestions/LegalQCard/LegalQCard'

function LegalQuestion() {
  return (
    <div className='legal_question'>
      <LegalQHero />
      <LegalQCard />
    </div>
  )
}

export default LegalQuestion