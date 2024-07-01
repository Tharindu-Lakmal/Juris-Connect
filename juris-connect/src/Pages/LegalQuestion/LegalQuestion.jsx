import React from 'react'
import './LegalQuestion.css'
import Navbar from '../../components/Header/Navbar'
import Footer from '../../components/Footer/Footer'
import legalquestionimg1 from '../../assets/legalquestionimg1.png'
import LegalQHero from '../../components/LegalQuestions/LegalQHero/LegalQHero'

function LegalQuestion() {
  return (
    <div className='legal_question'>
      <Navbar />
      <LegalQHero />
      <Footer />
    /</div>
  )
}

export default LegalQuestion