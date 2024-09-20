import React, { useContext, useEffect, useState } from 'react'
import './UserSignIn.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../../context/StoreContext'

const UserSignIn = () => {

    // const {url} = useContext(StoreContext)
    const { setUserData } = useContext(StoreContext); // Access the setter for user data

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


    const handleSubmit = (event) => {
        event.preventDefault();
        // Save registration data to the global context
        setUserData(data);
        console.log("User Data Saved", data);
    };
    

  return (
    <div className='usersignin'>
        <div className="usersignin-container">

            <h3>Create an account</h3>
            <p>
                Easily remove the background from images in Adobe Express, 
                your all-in-one AI content creation app.
            </p>
            <div className="usersignin-form-container">
                <div className="usersignin-form">
                    <form className='form-container' onSubmit={handleSubmit}>
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

                        <button className="login-btn">Continue</button>

                        <p>Already have an account? <span className='divider' >Sign in</span></p>
                    </form>

                    <div className="form-condition-footer">
                        <a href="#">Terms of Use</a>
                        <span className='privacy-policy'></span>
                        <a href="#">Privacy Policy</a>
                    </div>
                </div>

                <div className="usersignin-img">
                    <img src={assets.registration_icon} alt="" />
                </div>
            </div>

            
        </div>
    </div>
  )
}

export default UserSignIn