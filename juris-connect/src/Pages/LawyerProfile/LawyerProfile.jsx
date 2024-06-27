import React from 'react'
import './LawyerProfile.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Header/Navbar';
import img1 from "../../assets/lawyer_pic.jpg";
import img2 from "../../assets/law_page_back.jpg";
import { NavLink, Outlet } from 'react-router-dom';





function LawyerProfile() {
  return (
    <div> 
        <Navbar />
    <div className="profile-container">
        <div>
            <img src={img2} className='profile-cover' />
        </div>
            <div className="profile-header">
                <img src={img1} alt="Lawyer" className="profile-image" />
                <h2>Lawyer Kamalsiri Perera</h2>
                <p className="verified"> Verified&nbsp;<i className="fas fa-check-circle"></i> </p>
            </div>
        
            
            <div className="profile-consulting-options">
                <div className="option">
                    <i className="fas fa-phone"></i>
                    <p>Phone Consulting</p>
                </div>
                <div className="option">
                    <i className="fas fa-comments"></i>
                    <p>Online Messaging</p>
                </div>
                <div className="option">
                    <i className="fas fa-envelope"></i>
                    <p>Email Consulting</p>
                </div>
                <div className="option">
                    <i className="fas fa-video"></i>
                    <p>Video Consulting</p>
                </div>
            </div>
        </div>
        <div>
            <div className='title'>
                <h2>Empowering Sri Lankans with Legal Knowledge and Access</h2>
                <p>Easily remove the background from images in Adobe Express, your all-in-one AI content creation app.</p>

            </div>
        <div className="profile-details-navigation">
                <NavLink to="LawyerDetails" className="nav-link" activeClassName="active-nav-link">Lawyer Details</NavLink>
                <NavLink to="BookAppointment" className="nav-link" activeClassName="active-nav-link">Book Appointment</NavLink>
                <NavLink to="ReviewsRatings" className="nav-link" activeClassName="active-nav-link">Reviews & Ratings</NavLink>
        </div>
            <div className="profile-details-content">
                <Outlet />
            </div>
        </div>
        
        <Footer />
        </div>
    );
};
  

export default LawyerProfile