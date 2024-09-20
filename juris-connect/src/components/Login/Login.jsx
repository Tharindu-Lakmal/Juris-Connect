import React, { useContext, useState } from 'react'
import './Login.css'
import './SignupOption.css'
import './UserSignIn.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../../context/StoreContext';
import axios from "axios";

const Login = ({setlogin}) => {   

    const[signUp, setSignUp] = useState("form-container");
    const setLogin = setlogin;

    ////////////////////////////
    const {url, setToken} = useContext(StoreContext)

    const [image, setImage] = useState(false);

    const imageHandler = (event) => {
        setImage(event.target.files[0])
    }

    const [data, setData] = useState({
        user_image:"",
        name:"",
        email:"",
        password:"",
        phone:""
    })

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({...data, [name]:value}))
    }

    // Handle both onchange handler on image
    const handleChange = (event) => {
        imageHandler(event);
        onChangeHandler(event);
    }

    //to verify the data on the console
    // useEffect(() => {
    //     console.log(data);
    // }, [data])

    const onLogin = async (event) => {
        event.preventDefault();

        let newUrl = url;

        if (signUp === "form-container") {
            newUrl += "/api/user/login"  
        }
        else {
            newUrl += "/api/user/register"      
        }

        const response = await axios.post(newUrl, data);

        if (response.data.success) {
            setToken(response.data.token);
            localStorage.setItem("token", response.data.token);

            setlogin(false);
        }
        else {
            alert(response.data.message)
        }
    }    


  return (
    <div className='logincard'>
        <div className="login-form">
            <img onClick={() => setlogin(false)} className='login-form-close' src="./close_icon.png" alt="" />

            <form onSubmit={onLogin} className={signUp==="form-container"?"form-container":"form-container hide"} >
                <h3 className="form-header">Welcome back</h3>
                <p className='form-text'>
                    Easily remove the background from 
                    images in Adobe Express.
                </p>

                <div className="form-inputs">
                    <input name='email' onChange={onChangeHandler} value={data.email} type="text" placeholder='Email'  required />
                    <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Password'  required />

                    <button className="login-btn" type="submit">Continue</button>

                    <p>Don't have an account? <span onClick={() => setSignUp("form-signup")} className='divider'>Sign up</span></p>

                    <div className="divider-text"><span>or</span></div>

                    <button className="google-signin">
                        <img src={assets.google} alt="" />
                        Continue with Google
                    </button>
                </div>
            </form>


            {/* signup option section */}
            <div className={signUp==="form-signup"?"form-signup":"form-signup hide"}>
                {/* <SignupOption setSignUp={setSignUp} setlogin={setLogin} /> */}

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
                        <button onClick={()=>setSignUp("user-form-register")}>Sign up as a user</button>

                        <button onClick={()=>setSignUp("lawyer-form-register")}>Sign up as a lawyer</button>
                    </div>

                    <p>Already have an account? <span onClick={() => setSignUp("form-container")} className='divider'>Sign in</span></p>

                    <p className="footer-text">
                        Easily remove the background from images in Adobe Express, 
                        your all-in-one AI content creation app.
                    </p>
                </div>

            </div>


            {/* user registration */}
            <div className={signUp==="user-form-register"?"user-form-register":"user-form-register hide"}>
                <div className='usersignin'>
                    <div className="usersignin-container">

                        <h3>Create an account</h3>
                        <p>
                            Easily remove the background from images in Adobe Express, 
                            your all-in-one AI content creation app.
                        </p>
                        <div className="usersignin-form-container">
                            <div className="usersignin-form">
                                <form onSubmit={onLogin} className='form-container'>
                                    <div className="profile-img">
                                        <p>Upload profile picture:</p>
                                        <div className="pi-container">
                                            <label htmlFor="image">
                                                <img src={image?URL.createObjectURL(image):assets.profile_icon} alt="" />
                                            </label>
                                            {/* <img src={assets.pen} alt="" className="pen" /> */}
                                            <input name='user_image' onChange={handleChange} value={data.user_image} type="file" id='image' hidden required /> {/*onChange={(e) => setImage(e.target.files[0])} */}
                                        </div>
                                    </div>
                                    <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='User name' required />
                                    <input name='email' onChange={onChangeHandler} value={data.email} type="text" placeholder='Email' required />
                                    <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Password (min 8 characters)' required />
                                    <input name='phone' onChange={onChangeHandler} value={data.phone} type="text" placeholder='Mobile number' required />
                                    {/* <input type="password" placeholder='Confirm password' required /> */}

                                    <button type='submit' className="login-btn">Continue</button>

                                    <p>Already have an account? <span className='divider' onClick={() => setSignUp("form-container")} >Sign in</span></p>
                                </form>

                                {/* <div className="form-condition-footer">
                                    <a href="#">Terms of Use</a>
                                    <span className='privacy-policy'></span>
                                    <a href="#">Privacy Policy</a>
                                </div> */}
                            </div>

                            <div className="usersignin-img">
                                <img src={assets.registration_icon} alt="" />
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>


            {/* lawyer registration */}
            <div className={signUp==="lawyer-form-register"?"lawyer-form-register":"lawyer-form-register hide"}>
                <h1>sffefef</h1>
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