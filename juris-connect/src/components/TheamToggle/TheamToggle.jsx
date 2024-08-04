import React from 'react'
import './TheamToggle.css'
import { assets } from '../../assets/assets'

const TheamToggle = ({handleChange, isChecked}) => {
  return (
    <div className='toggle-container'>
        <input type="checkbox" id='check' className='toggle' onChange={handleChange} checked={isChecked} />
        <label htmlFor="check"><img src={assets.sun} alt="" /></label>
    </div>
  )
}

export default TheamToggle