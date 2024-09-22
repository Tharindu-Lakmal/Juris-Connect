import React from 'react'
import './About.css'
import { assets } from '../../assets/assets'

const About = () => {
  return (
    <div className='about'>
        <div className="about-top-container">

            <div className="about-container">
                <div className="about-img">
                    <img src={assets.about1} alt="" />
                </div>

                <div className="about-content">
                    <h2>
                        Discover our identity and 
                        get to know us better
                    </h2>
                    <p>
                        JurisConnect was created in 2024 by five software engineering 
                        students from Sabaragamuwa University of Sri Lanka as part of 
                        their mini-project. Our goal is to simplify the legal process and 
                        make it more accessible to people. 
                        <br /><br />
                        JurisConnect aims to connect clients with experienced legal 
                        professionals who can help them with their legal needs. 
                    </p>
                </div>
            </div>

            <div className="about-container about-container-2">

                <div className="about-content">
                    <h2>
                    Our mission and values 
                    and learn about what 
                    drives us forward
                    </h2>
                    <p>
                        Our mission is to provide excellent legal support 
                        that helps our clients navigate their legal challenges with ease. 
                        We are guided by our core values and uphold the highest 
                        ethical standards in everything we do. Innovation drives us to 
                        continuously look for new ways to improve our services and 
                        offer the best solutions. 
                        <br /><br />
                        We believe in putting our clients first, ensuring that everyone 
                        receives personal attention and customized legal advice. Our 
                        team of experienced legal professionals is dedicated to 
                        achieving the best results for our clients and building trust. 
                    </p>
                </div>

                <div className="about-img">
                    <img src={assets.about2} alt="" />
                </div>
            </div>

        </div>
    </div>
  )
}

export default About