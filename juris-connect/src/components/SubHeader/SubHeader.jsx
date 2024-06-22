import React from 'react'
import './SubHeader.css'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'

const SubHeader = () => {
  return (
    <div className='subheader'>
        <div className="header-container">

          <div className="content">
            <h2>
              Your Trusted Source For Legal 
              Assistance And Information
            </h2>
            <p>
              Get personalized legal advice by asking your questions directly or 
              explore educational videos posted by our expert lawyers.
            </p>

            <div className="btn-container">
              <button className="btn">
                  <Link to='/legal_consultation'>Get Advices</Link>
              </button>
              <button className="btn">
                  <Link to='/lawyer_videos'>View Lawyer Contents</Link>
              </button>
            </div>
          </div>

          <div className="subheading-img">
            <img src={assets.header1} alt="" />
          </div>

        </div>
    </div>
  )
}

export default SubHeader