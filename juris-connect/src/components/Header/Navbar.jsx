import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import TheamToggle from '../TheamToggle/TheamToggle';

const NavBar = ({setLogin, isCheckedtest, handleChangetest}) => {

    const [isOpen, setIsOpen] = useState(false);

    const NavActive = () => {
        setIsOpen(!isOpen);
    }

    const isChecked = isCheckedtest;
    const handleChange = handleChangetest;


  return (
    <div className='navbar'>
        <div className="navbarcontainer">

            <div className="navbar-header">
                <div className="logo">
                    <Link to='/'>
                        <img className='logo' src="/JurisConnect_logo.png" alt="" />
                    </Link>
                </div>
            

                <nav className={isOpen?"navbar-ul-link active":"navbar-ul-link"}>
                    <div className="navbar-ul-top">
                        <Link to='/'>
                            <img className='logo' src="/JurisConnect_logo.png" alt="" />
                        </Link>

                        {/* close icon "X" */}
                        <div className="navbar-menu" onClick={NavActive}>
                            <img src="/close_icon.png" alt="" />
                        </div>
                    </div>
                    <div className="navbar-ul-list">
                        <ul>
                            <li className='navbar-link'><a href="#">Home</a></li>
                            <li className='navbar-link'><a href="#">Community Forum</a></li>
                            <li className='navbar-link'><a href="#">About us</a></li>
                            <TheamToggle isChecked={isChecked} handleChange={handleChange} />
                        </ul>
                        {/* <TheamToggle /> */}
                    </div>

                    {/* sign in btn */}
                    <div className="navbar-btn">
                        <button onClick={()=>setLogin(true)} className="signup">Log in</button>
                        {/* <button onClick={()=>setLogin(true)} className="signup">Sign up</button> */}
                    </div>
                </nav>

                {/* hambager menu icon */}
                <button className="navbar-menu" onClick={NavActive}>
                    <img src="/menus_icon.png" alt="" />
                </button>

                <div className={isOpen?"overlay active":"overlay"} data-overlay data-nav-toggler></div>

            </div>

        </div>
    </div>
  )
}

export default NavBar