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
                            <img src={assets.legal_consultaion} alt="" />
                        </div>

                        <p className='card-text'>Legal Consultations</p>
                    </div>
                </Link>

                <Link to='/legal_education'>
                    <div className="pagecard">
                        <div className="pagecard-img">
                            <img src={assets.legal_education} alt="" />
                        </div>

                        <p className='card-text'>Legal Educations</p>
                    </div>
                </Link>

                <Link to='/lawyers'>
                    <div className="pagecard">
                        <div className="pagecard-img">
                            <img src={assets.lawyers} alt="" />
                        </div>

                        <p className='card-text'>Lawyers</p>
                    </div>
                </Link>

                <Link to='/legal_questions'>
                    <div className="pagecard">
                        <div className="pagecard-img">
                            <img src={assets.legal_questions} alt="" />
                        </div>

                        <p className='card-text'>Legal Questions</p>
                    </div>
                </Link>

                <Link to='/blogs_news'>
                    <div className="pagecard">
                        <div className="pagecard-img">
                            <img src={assets.blogs_news} alt="" />
                        </div>

                        <p className='card-text'>Blogs & News</p>
                    </div>
                </Link>

                <Link to='/lawyer_videos'>
                    <div className="pagecard">
                        <div className="pagecard-img">
                            <img src={assets.lawyer_videos} alt="" />
                        </div>

                        <p className='card-text'>videos</p>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default PageCard