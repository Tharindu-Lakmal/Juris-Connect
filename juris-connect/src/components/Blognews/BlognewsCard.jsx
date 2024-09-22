import React, { useState } from 'react'
import './BlognewsCard.css'
import { assets_pdf } from '../../assets-pdf/assets-pdf';


function BlognewsCard() {

  //Display only 5 cards first and then clicking 'see more' button add more cards to the displayed list
  const [visibleBlogCards, setVisibleBlogCards] = useState(5);

  //function to set the number of visible Cards number(count). update visibleCards state 
  const loadMoreCards = () => {
    setVisibleBlogCards(prevvisibleBlogCards => {
      const remainingCards = assets_pdf.length - prevvisibleBlogCards;
      return prevvisibleBlogCards + (remainingCards < 6 ? remainingCards : 6);
    });
  };


  return (
    <div className='BlognewsCard'>
        <div className="BlognewsCard-container">

            <h2>
                Recent blog posts
            </h2>

            <div className="BlognewsCard-cards">

                {/* set the number of visible cards from 0 */}
                {assets_pdf.slice(0, visibleBlogCards).map((item, index) => {

                    return (
                        <a href={item.url} target='_blank'>
                            <div key={index} className="card">

                                <div className="card-top">
                                    <div className="BlognewsCard-img">
                                        <img src={item.file_image} alt="" />
                                    </div>
                                    <div className="BlognewsCard-details">
                                        
                                        <h4>{item.file_name}</h4>
                                        
                                        <p className="BlognewsCard-description">{item.description}</p>
                                        <p className="BlognewsCard-writer">{item.writer}y Experience</p>

                                    </div>
                                </div>
                            </div>
                        </a>
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

export default BlognewsCard