import Navbar from '../../components/Header/Navbar'
import "./Legalcon.css"
import img1 from "../../assets/Legalcon.jpeg"
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from '../../components/Footer/Footer';


export default function Legalcon(){
    return(
    <div>
      <Navbar />
      <div className="content">
        <div className="left">
          <h1>Get the legal help <br/> you need</h1>
          <p>Every problem is unique, and we offer personalized <br />recomendations to suit your specific needs</p>
          <div className='buttons'>
          <button className='button-left'>Ask your legal question</button>
          <button className='button-right'><a href="LawyerProfile"> Free legal advice </a> </button>
          </div>
        </div>
        <div className="right">
          <img src={img1} alt="Description" />
        </div>
      </div>
      <section>
        <form>
          <h2> Describe your situation</h2>
          <h3>Ready to submit your question? Here's what we need from you</h3>
          <div className='box'> 
              <div className='input-box'>
                <label>Heading</label>
                <input type='text' className='field' placeholder='Enter your name' required/>

              </div>
              <div className='input-box'>
                <label>Topic</label>
                <input type='text' className='field' placeholder='Choose one' required/>

              </div>
              <div className='input-box'>
                <label>Home town</label>
                <input type='text' className='field' placeholder='Nearest city belong to this question' required/>

              </div>
               <div className='input-box'>
                  <label>Description</label>
                  <input type='text' className='field mess' placeholder='Briefly describe your question/problem' required/>
                
              </div>
              <div className="warning-box">
                 <i className="fas fa-exclamation-triangle"> Note</i>
                 <p>JurisConect will not be responsible in case of any issues or discrepancies with the expert answer. All free questions will publish in the site for public knowledge sharing. You should not include any person or organization name and detail in the question which would affect the brand or reputation of the other party.</p>
              </div>

              <div className="checkbox-container">
                   <input type="checkbox" id="agree" name="agree" />
                   <label htmlFor="agree">I have read the notice and i hold the responsibility for the details provided here.</label>
              </div>
               <div className='button'>
               <button className='button-submit'>Submit</button>
               <button className='button-cancel'>Cancel</button>
              </div>
          </div>
          
        </form>
        
      </section>
      
            <Footer />
          
      
      
    </div>
    

    )
}