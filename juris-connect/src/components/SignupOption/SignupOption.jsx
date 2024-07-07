import React from 'react'
import './SignupOption.css'
import { assets } from '../../assets/assets'

const SignupOption = ({setSignUp}) => {
  return (
    <div className='signupOption'>
        <div className='signupOption-logo'>
            <img src={assets.JurisConnect_logo} alt="" />
        </div>

        <div className="text-header">
            <h3>Choose your sign up option</h3>
            <p>
                Easily remove the background from images in Adobe Express, 
                your all-in-one AI content creation app.
            </p>
        </div>

        <div className="page-btn">
            <button>Sign up as a user</button>
            <button>Sign up as a lawyer</button>
        </div>

        <p>Already have an account? <span onClick={() => setSignUp("form-container")} className='divider'>Sign in</span></p>

        <p className="footer-text">
            Easily remove the background from images in Adobe Express, 
            your all-in-one AI content creation app.
        </p>
    </div>
  )
}

export default SignupOption