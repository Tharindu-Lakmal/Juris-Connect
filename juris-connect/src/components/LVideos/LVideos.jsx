import React, { useEffect } from 'react';
import './LVideos.css'
import { assets } from '../../assets/assets'

const LVideos = () => {

  useEffect(() => {
    const scrollContainer2 = document.querySelector(".lvideos-img");
    const leftBtn2 = document.getElementById("btn-left-2");
    const rightBtn2 = document.getElementById("btn-right-2");

    if (leftBtn2 && rightBtn2 && scrollContainer2) {
        leftBtn2.addEventListener("click", () => {
            scrollContainer2.scrollLeft -= 680;
            scrollContainer2.style.scrollBehavior = "smooth";
        });

        rightBtn2.addEventListener("click", () => {
            scrollContainer2.scrollLeft += 680;
            scrollContainer2.style.scrollBehavior = "smooth";
        });
    } 

  // Cleanup function to remove event listeners if component unmounts
    return () => {
      if (leftBtn2 && rightBtn2) {
        leftBtn2.removeEventListener("click", () => {});
        rightBtn2.removeEventListener("click", () => {});
      }
    };

  }, []);

  return (
    <div className='lvideos'>
        <div className="lvideos-container">

            <div className="lvideos-img-wrap">

              <div className="lvideos-img">
                  <div>
                    <span><img src={assets.video1} /></span>
                  </div>
                  <div>
                    <span><img src={assets.video2} /></span>
                  </div>
                  <div>
                    <span><img src={assets.video3} /></span>
                  </div>
              </div>
              

              <div className="control-btn">
                  <img src={assets.left_arrow} id='btn-left-2' />
                  <img src={assets.right_arrow} id='btn-right-2' />
              </div>
            </div>

            <div className="lvideos-content">
                <h2>
                  What Our Experts Recommend You
                </h2>

                <p>
                  Lifecycle methods are custom functionality that gets executed 
                  during the different phases of a component. There are methods 
                  available when the component gets created and inserted into the 
                  DOM (mounting), when the component updates, and when the 
                  component gets unmounted or removed from the DOM.
                </p>
            </div>

        </div>
    </div>
  )
}

export default LVideos