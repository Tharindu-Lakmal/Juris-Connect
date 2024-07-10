import React, { useEffect } from 'react';
import './QCard.css'
import { assets } from '../../assets/assets'

const QCard = () => {

    useEffect(() => {
        const scrollContainer = document.querySelector(".qcard-img");
        const leftBtn = document.getElementById("btn-left");
        const rightBtn = document.getElementById("btn-right");

        if (leftBtn && rightBtn && scrollContainer) {
            leftBtn.addEventListener("click", () => {
                scrollContainer.scrollLeft -= 320;
                scrollContainer.style.scrollBehavior = "smooth";
            });

            rightBtn.addEventListener("click", () => {
                scrollContainer.scrollLeft += 320;
                scrollContainer.style.scrollBehavior = "smooth";
            });
        } 

    // Cleanup function to remove event listeners if component unmounts
      return () => {
        if (leftBtn && rightBtn) {
          leftBtn.removeEventListener("click", () => {});
          rightBtn.removeEventListener("click", () => {});
        }
      };

    }, []);


  return (
    <div className='qcard'>
        <div className="qcard-container">
            <div className="qcard-content">
              <h2>
                  Get Legal Advice From Our Expert Lawyers Community
              </h2>

              <p>
              Lifecycle methods are custom functionality that gets executed 
              during the different phases of a component. There are methods 
              available when the component gets created and inserted into the 
              DOM (mounting), when the component updates, and when the 
              component gets unmounted or removed from the DOM.
              </p>
            </div>

            <div className="qcard-img-wrap">

                <div className="qcard-img">
                  <div>
                    <span><img src={assets.qcard1} /></span>
                  </div>
                  <div>
                    <span><img src={assets.qcard2} /></span>
                  </div>
                  <div>
                    <span><img src={assets.qcard3} /></span>
                  </div>
                </div>

                <div className="control-btn">
                    <img src={assets.left_arrow} id='btn-left' />
                    <img src={assets.right_arrow} id='btn-right' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default QCard