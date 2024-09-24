import React from 'react'
import './SubHeader.css'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'

const SubHeader = () => {
  return (
    <div className='subheader'>
        <div className="header-container">

          <div className="header-content">
            <h2>
              Virtual Tools for Legal Understanding 
            </h2>
            <p>
              Experience customized guidance through our immersive AR/VR tools, 
              designed to enhance your understanding and confidence in legal settings
            </p>

            <div className="btn-container">
              <button className="btn">
                <a href="http://localhost:3000" target='_blank'>Explore Legal Guidance</a>
              </button>
              {/*<button className="btn">
                  <Link to='/lawyer_videos'>View Lawyer Contents</Link>
              </button>*/}
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