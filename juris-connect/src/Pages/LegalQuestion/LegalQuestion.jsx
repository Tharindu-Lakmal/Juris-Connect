import React from 'react'
import './LegalQuestion.css'
import Navbar from '../../components/Header/Navbar'
import Footer from '../../components/Footer/Footer'
import legalquestionimg1 from '../../assets/legalquestionimg1.png'

function LegalQuestion() {
  return (
    <div className='legal_question'>
      <Navbar />
      <div>
      <div className="lqcontent">
        <div className="heading">
          <h1 className="topic">Ask your questions <br />& get the answers</h1>
          <p className="text">Have a burning legal question but don't want the hassle <br /> 
(or expense) of a consultation? Our anonymous Q&A <br />
forum connects you with experienced, registered lawyers <br />
ready to answer your legal questions. Ask freely, and get <br />
informed answers, all while protecting your privacy.</p>
        </div>
        <div className="img">
        <img src={legalquestionimg1} alt="" />
      </div>
      </div>
    </div>

    <section>
      <form>
        <div className='headerpart'>
         <div className="heading">
          <h2>Recent blog posts</h2>
         </div>
         <div className='button'>
          <button className='ask-question'><a href="legal_consultaion"></a>Ask a question</button>
         </div>
        </div>
        <div>
         
        </div>
      </form>
    </section>
    <Footer />
    </div>
 
    
  )
}

export default LegalQuestion