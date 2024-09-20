import React from 'react'
import './LawyerSignIn.css'
import { assets } from '../../assets/assets'

const LawyerSignIn = () => {
  return (
    <div className='lawyersignin'>
        <div className="usersignin-container">

            <h3>Create an account as a lawyer</h3>
            <p>
                Easily remove the background from images in Adobe Express, 
                your all-in-one AI content creation app.
            </p>
            <div className="usersignin-form-container">
                <div className="usersignin-form">
                    <form className='form-container'>
                        <input type="text" placeholder='User name' required />
                        <input type="text" placeholder='Email' required />
                        <input type="text" placeholder='Mobile number' required />
                        <input type="password" placeholder='Password (min 6 characters)' required />
                        <input type="password" placeholder='Confirm password' required />
                        <input type="password" placeholder='Password (min 6 characters)' required />
                        <input type="password" placeholder='Confirm password' required />

                        <button className="login-btn">Continue</button>

                        <p>Already have an account? <span className='divider'>Sign in</span></p>
                    </form>

                    <div className="form-condition-footer">
                        <a href="#">Terms of Use</a>
                        <span className='privacy-policy'></span>
                        <a href="#">Privacy Policy</a>
                    </div>
                </div>

                <div className="usersignin-img">
                    <img src={assets.registration_icon2} alt="" />
                </div>
            </div>


        </div>
    </div>
  )
}

export default LawyerSignIn