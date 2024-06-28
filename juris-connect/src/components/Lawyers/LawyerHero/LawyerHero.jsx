
import React from 'react'
import './LawyerHero.css'
import { assets } from '../../../assets/assets'

const LawyerHero = () => {
  return (
    <div className='lawyerhero'>
        <div className="lawyerhero-container">

            <div className="lawyerhero-content">
                <h1>
                    Explore lawyers in Sri Lanka
                </h1>
                <p>
                    Select your city and area of expertise to find expert 
                    lawyers and JurisConnect connects you with top 
                    legal professionals across Sri Lanka
                </p>
            </div>

            <div className="lawyerhero-img">
                <img src={assets.lawyers_bg} alt="" />
            </div>

        </div>
    </div>
  )
}

export default LawyerHero