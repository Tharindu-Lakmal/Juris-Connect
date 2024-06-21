import React from 'react';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section logo-section">
                    <h2>JurisConnect</h2>
                    <p>Get personalized legal advice by asking your questions directly or explore educational videos posted by our expert lawyers.</p>
                </div>
                <div className="footer-section services-section">
                    <h2>Our Services</h2>
                    <ul>
                        <li>Legal Consultation</li>
                        <li>Legal Education</li>
                        <li>Legal Questions</li>
                        <li>Blogs & News</li>
                    </ul>
                </div>
                <div className="footer-section links-section">
                    <h2>Helpful Links</h2>
                    <ul>
                        <li>Lawyers</li>
                        <li>Videos</li>
                    </ul>
                </div>
                <div className="footer-section contact-section">
                    <h2>Contact Us</h2>
                    <p>jurisconnect@gmail.com</p>
                    <div className="social-icons">
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-linkedin"></i>
                        <i className="fab fa-youtube"></i>
                        <i className="fab fa-tiktok"></i>
                    </div>
                </div>
            </div>
            <hr className="custom-line"/>
            <div className="footer-bottom">
                <p>© 2024 JurisConnect. All rights reserved.</p>
                <ul>
                    <li>FAQ</li>
                    <li>Privacy</li>
                    <li>Terms & Conditions</li>
                </ul>
            </div>
        </footer>
    );
}
