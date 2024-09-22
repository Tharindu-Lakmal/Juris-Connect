import React from 'react'
import './PageCard.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const PageCard = () => {
  return (
    <div className="p-container">
        <div className='pagecards'>
            <h2>
                Empowering Sri Lankans with Legal 
                Knowledge and Access
            </h2>
            <p className='heading-text'>
                Easily remove the background from images in Adobe Express, 
                your all-in-one AI content creation app.
            </p>

            <div className="pagecard-content">
                <Link to='/legal_consultaion'>
                    <div className="pagecard">
                        <div className="pagecard-img">
                            <img src={assets.consultation_icon} alt="" />
                        </div>

                        <div className="pagecard-text">
                            <h3>Consultations</h3>
                            <p className='card-text'>Enjoy technical deep-dives, one-on-one expert advice</p>
                        </div>
                    </div>
                </Link>

                <Link to='/legal_education'>
                    <div className="pagecard">
                        <div className="pagecard-img">
                            <img src={assets.education_icon} alt="" />
                        </div>

                        <div className="pagecard-text">
                            <h3>Legal Education</h3>
                            <p className='card-text'>Enjoy technical deep-dives, one-on-one expert advice</p>
                        </div>
                    </div>
                </Link>

                <Link to='/lawyers'>
                    <div className="pagecard">
                        <div className="pagecard-img">
                            <img src={assets.lawyer_icon} alt="" />
                        </div>

                        <div className="pagecard-text">
                            <h3>Lawyers</h3>
                            <p className='card-text'>Enjoy technical deep-dives, one-on-one expert advice</p>
                        </div>
                    </div>
                </Link>

                <Link to='/legal_questions'>
                    <div className="pagecard">
                        <div className="pagecard-img">
                            <img src={assets.question_icon} alt="" />
                        </div>

                        <div className="pagecard-text">
                            <h3>Legal Question</h3>
                            <p className='card-text'>Enjoy technical deep-dives, one-on-one expert advice</p>
                        </div>
                    </div>
                </Link>

                <Link to='/blogs_news'>
                    <div className="pagecard">
                        <div className="pagecard-img">
                            <img src={assets.blogs_icon} alt="" />
                        </div>

                        <div className="pagecard-text">
                            <h3>Blogs and News</h3>
                            <p className='card-text'>Enjoy technical deep-dives, one-on-one expert advice</p>
                        </div>
                    </div>
                </Link>

                <Link to='/lawyer_videos'>
                    <div className="pagecard">
                        <div className="pagecard-img">
                            <img src={assets.video_icon} alt="" />
                        </div>

                        <div className="pagecard-text">
                            <h3>Virtual Tools for Legal Understanding </h3>
                            <p className='card-text'>Immersive AR/VR tools for legal guidance</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default PageCard