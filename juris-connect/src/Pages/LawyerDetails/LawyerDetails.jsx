import React from 'react';
import img1 from "../../assets/video1.jpg";
import '../LawyerDetails/LawyerDetails.css';


const LawyerDetails = () => {
    return (
        <div>
            <div className="profile-main">
                <div className="profile-details">
                    <div className="profile-row">
                        <div className="profile-col">
                            <p><strong>Name:</strong> Mr. A.C. Kamalsiri Perera</p>
                            <p><strong>Experience:</strong> 10 years</p>
                            <p><strong>Languages known:</strong> English, Sinhala</p>
                            
                         </div>
                     <div className="profile-col">
                        <p><strong>Gender:</strong> Male</p>
                        <p><strong>Education:</strong> University of Colombo</p>
                        <p><strong>Practice courts:</strong> Colombo</p>
                    </div>
                    
                    </div>
                    <p><strong>Specialization:</strong> Divorce, Family Matters, Civil Cases, Cheque Bounce, Criminal Matters</p>
                </div>
                <div className="profile-video">
                    <img src={img1} alt="Video" />
                </div>
            </div>
        </div>
    );
};

export default LawyerDetails;
