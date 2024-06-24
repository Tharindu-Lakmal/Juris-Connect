import React from 'react'
import './LawyerProfile.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Header/Navbar';


function LawyerProfile() {
  return (
    <div> 
        <Navbar />
    <div className="profile-container">
            <div className="profile-header">
                <img src="your-profile-image-url.jpg" alt="Lawyer" className="profile-image" />
                <h2>Lawyer Kamalsiri Perera</h2>
                <p className="verified"><i className="fas fa-check-circle"></i> Verified</p>
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
        <Footer />
        </div>
    );
};
  

export default LawyerProfile