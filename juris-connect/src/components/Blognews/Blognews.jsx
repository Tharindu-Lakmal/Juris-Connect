import React from 'react'
import './Blognews.css'
import SearchBar from '../../components/SearchBar/SearchBar'

const Blognews = () => {
  return (
    <div className='Blognews'>
      
        <div className="Blognews-content">
          
          <div className="content">
            <h1>
                Stay Informed and Inspired
            </h1>
            <p>
                Welcome to our Blogs & News hub! Discover the latest updates, expert 
                insights, and inspiring stories from our community. Stay connected 
                with trends and tips that matter to you.
            </p>
            <div className="Blognews-search">
              {/* <SearchBar /> */}
            </div>
          </div>

        </div>
    </div>
  )
}

export default Blognews