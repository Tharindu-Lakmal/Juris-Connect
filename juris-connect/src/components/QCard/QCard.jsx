import React from 'react'
import './QCard.css'
import { assets } from '../../assets/assets'

const QCard = () => {
  return (
    <div className='qcard'>
        <div className="qcard-container">
            <h2>
                Get Legal Advice From Our Expert Lawyers Community
            </h2>

            <div className="qcard-img">
                <img src={assets.qcard} alt="" />
                <img src={assets.qcard} alt="" />
                <img src={assets.qcard} alt="" />
            </div>
        </div>
    </div>
  )
}

export default QCard