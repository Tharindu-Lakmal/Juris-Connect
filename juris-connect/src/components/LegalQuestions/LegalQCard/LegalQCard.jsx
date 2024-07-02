import React from 'react'
import './LegalQCard.css'
import { assets, qcard_details } from '../../../assets/assets'


const LegalQCard = () => {
    return (
      <div className='legalqcard'>
          <div className="legalqcard-container">
              <div className="legalqcard-qcard">
               

                {qcard_details.map((item, index) => {
                    return (
                        <div className="legalqcard-header">
                            <div className="qcard-circle">A</div>
                            <div><h4>{item.topic}</h4></div>
                            <div className="qcard-info">
                                <div className="qcard-date">2024.05.16</div>
                                 <div className="qcard-qarea">Family</div>
                            </div>
                            <div className="legalqcard-content">
                                <div className="qcard-question">
                                    <p className='qcard-question-p'>{item.description}</p>
                                    <button className="qcard-reply-btn">Reply</button>
                                </div>
                                <div className="qcard-answer">
                                    <div className="qcard-lawyer-details">
                                        <div className="qcard-lawyer-img">
                                            <img src={item.lawyer_image} alt="" />
                                        </div>
                                        <div className="qcard-lawyer-name">
                                            <h5>{item.lawyer_name}</h5>
                                        </div>
                                    </div>
                                <p className='qcard-answer-p'>{item.answer}</p>
                                </div>
                                </div>
                                </div>
                    )
                })}
                </div>
          </div>
      </div>
    )
  }
  
  export default LegalQCard