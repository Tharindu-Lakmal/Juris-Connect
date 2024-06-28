
import React, { useState } from 'react'
import './LawyerSearch.css'

const LawyerSearch = () => {

    // state variable for set name, city, and subject
    const [namecity, setnamecity] = useState("");
    const [subject, setsubject] = useState("");


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(namecity, subject);
    };





  return (
    <div className='lawyersearch'>
        <div className="lawyersearch-container">

            <div className="lawyersearch-content">
                <h2>
                    Select lawyer’s city or area and their subject to find expert lawyers
                </h2>

                <div className="lawyersearch-form">
                    <form onSubmit={handleSubmit}>

                        <label className='lawyersearch-label' htmlFor="">
                            Lawyer name or city

                            {/* set use input for name and city input field */}
                            <input type="text" value={namecity} onChange={(event) => setnamecity(event.target.value)} 
                            placeholder='Search a lawyer by name or from city' required />
                        </label>


                        <label className='lawyersearch-label' htmlFor="">
                            Subject

                            {/* set use input for subject input field */}
                            <select type="text" className='lawyersearch-subject' name="subject" value={subject} 
                            onChange={(event) => setsubject(event.target.value)}>
                                <option value="">Choose a subject</option>
                                <option value="apple">Apple</option>
                                <option value="banana">Banana</option>
                                <option value="orange">Orange</option>
                            </select>
                        </label>

                        <button className='lawyersearch-btn' type='submit'>
                            <img src="/search.png" alt="" />
                        </button>

                    </form>
                </div>

            </div>

        </div>
    </div>
  )
}

export default LawyerSearch