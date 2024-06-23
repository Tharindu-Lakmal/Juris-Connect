import React from 'react'
import './LVideos.css'
import { assets } from '../../assets/assets'

const LVideos = () => {
  return (
    <div className='lvideos'>
        <div className="lvideos-container">
            <h2>
                What Our Experts Recommend You
            </h2>

            <div className="lvideos-img">
                <img src={assets.video1} alt="" />
                <img src={assets.video2} alt="" />
                <img src={assets.video3} alt="" />
            </div>
        </div>
    </div>
  )
}

export default LVideos