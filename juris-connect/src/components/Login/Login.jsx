import React, { useState } from 'react'
import './Login.css'
import { assets } from '../../assets/assets'
import SignupOption from '../SignupOption/SignupOption';

const Login = ({setlogin}) => {

    const[signUp, setSignUp] = useState("form-container");
    const setLogin = setlogin;

  return (
    <div className='logincard'>
        <div className="login-form">
            <img onClick={() => setlogin(false)} className='login-form-close' src="./close_icon.png" alt="" />

            <form className={signUp==="form-container"?"form-container":"form-container hide"}>
                <h3 className="form-header">Welcome back</h3>
                <p className='form-text'>
                    Easily remove the background from 
                    images in Adobe Express.
                </p>

                <div className="form-inputs">
                    <input type="text" placeholder='Email' required />
                    <input type="password" placeholder='Password' required />

                    <button className="login-btn">Continue</button>

                    <p>Don't have an account? <span onClick={() => setSignUp("form-signup")} className='divider'>Sign up</span></p>

                    <div className="divider-text"><span>or</span></div>

                    <button className="google-signin">
                        <img src={assets.google} alt="" />
                        Continue with Google
                    </button>
                </div>
            </form>

            <div className={signUp==="form-signup"?"form-signup":"form-signup hide"}>
                <SignupOption setSignUp={setSignUp} setlogin={setLogin} />
            </div>
            
            <div className="condition-footer">
                <a href="#">Terms of Use</a>
                <span className='privacy-policy'></span>
                <a href="#">Privacy Policy</a>
            </div>
        </div>
    </div>
  )
}

export default Login