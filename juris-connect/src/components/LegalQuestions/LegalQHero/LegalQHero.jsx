
import React from 'react'
import './LegalQHero.css'
import { assets } from '../../../assets/assets'

const LegalQHero = () => {
  return (
    <div className='legalqhero'>
        <div className="legalqhero-container">

            <div className="legalqhero-content">
                <h1>
                    Ask your questions & get the answers
                </h1>
                <p>
                Have a burning legal question but don't want the hassle (or expense) of a consultation? Our anonymous Q&A
                forum connects you with experienced, registered lawyers 
                ready to answer your legal questions. Ask freely, and get 
                informed answers, all while protecting your privacy.
                </p>
            </div>

            <div className="legalqhero-img">
                <img src={assets.legalquestionimg1} alt="" />
            </div>

         

        </div>
        <div className="legalqcard-topic-content">
                  <div className='legalqcard-topic-heading'>
                  <h2>
                      Recent blog posts
                  </h2>
                  </div>
                  <div>
                  <button className="question-btn"> <a href="Legalcon">Ask a question</a></button>
                  </div>
              </div>
    </div>
  )
}

export default LegalQHero