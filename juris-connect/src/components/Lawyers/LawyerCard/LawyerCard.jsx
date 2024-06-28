
import React, { useState } from 'react'
import './LawyerCard.css'
import { assets, lawyers_details } from '../../../assets/assets'



//Display stars according to the average rating value
// Star component
const Star = ({ filled }) => (
  <span style={{ color: filled ? 'gold' : 'gray' }}>★</span>
);

// Rating component
const Rating = ({ averageRating }) => {
  const totalStars = 5;
  const filledStars = Math.round(averageRating);
  const stars = [];

  for (let i = 0; i < totalStars; i++) {
    stars.push(<Star key={i} filled={i < filledStars} />);
  }

  return <>{stars}</>;
};


const LawyerCard = () => {

  //Display only 10 cards first and then the see more button click add 12 more cards to the displayed list
  const [visibleCards, setVisibleCards] = useState(10);

  //function to set the number of visible Cards number(count). update visibleCards state 
  const loadMoreCards = () => {
    setVisibleCards(prevVisibleCards => {
      const remainingCards = lawyers_details.length - prevVisibleCards;
      return prevVisibleCards + (remainingCards < 12 ? remainingCards : 12);
    });
  };

  return (
    <div className='lawyercard'>
      <div className="lawyercard-container">

          <h2>
            Find our best lawyers varified by JurisConnect
          </h2>

          <div className="lawyercard-cards">

              {/* set the number of visible cards from 0 */}
              {lawyers_details.slice(0, visibleCards).map((item, index) => {

                  return (
                    <div keu={index} className="card">

                      <div className="card-top">
                          <div className="lawyer-img">
                            <img className='verified' src={assets.verified} alt="" />
                            <img src={item.lawyer_image} alt="" />
                          </div>
                          <div className="lawyer-details">
                            <div className="lawyer-name">
                              <h4>{item.lawyer_name}</h4>
                            </div>
                            <p className="city-exp">{item.lawyer_city}</p>
                            <p className="city-exp">{item.lawyer_expirience}y Experience</p>

                            {/* Display stars and trigger Rating function and pass averageRating as a prop to the function */}
                            <p className="rating-stars"><Rating averageRating={item.average_rating} /></p>
                          </div>
                      </div>

                      <hr />

                      <div className="card-bottum">
                        <h4>Skills</h4>
                        <p className="medium">Medium:</p>
                        <p>{item.lawyer_skills_medium()}</p>

                        <p className="medium specification">Specification:</p>
                        <p>{item.lawyer_skills_specification()}</p>
                      </div>

                      <div className="lawyercard-btn">
                        <button>More details</button>
                      </div>
                    </div>
                  )
              })}

          </div>

          {/* button to display more cards and trigger loadMoreCards function */}
        <div className="seemore-btn">
            <button onClick={loadMoreCards}>See more</button>
        </div>

      </div> 
    </div>
  )
}

export default LawyerCard