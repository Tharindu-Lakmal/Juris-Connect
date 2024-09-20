import React, { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import StoreContextProvider from '../context/StoreContext';

import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Legalcon from "./Pages/Legalconsultation/Legalcon";
import Navbar from "./components/Header/Navbar";
// import {createBrowserRouter,Route,RouterProvider,} from "react-router-dom";
import Hero from "./components/Hero/Hero";
import LVideos from "./components/LVideos/LVideos";
import QCard from "./components/QCard/QCard";
import SearchBar from "./components/SearchBar/SearchBar";
import SubHeader from "./components/SubHeader/SubHeader";
import BlogNews from "./Pages/BlogNews/BlogNews";
import Lawyers from "./Pages/Lawyers/Lawyers";
import LegalEducation from "./Pages/LegalEducation/LegalEducation";
import LegalQuestion from "./Pages/LegalQuestion/LegalQuestion";
import LegalVideos from "./Pages/LegalVideos/LegalVideos";
import LawyerProfile from "./Pages/LawyerProfile/LawyerProfile";
import LawyerDetails from "./Pages/LawyerDetails/LawyerDetails";
import BookAppointment from "./Pages/BookingAppointment/BookingAppointment";
import ReviewsRatings from "./Pages/ReviewsRating/ReviewsRating";
import Login from './components/Login/Login'
import NavBar from "./components/Header/Navbar";
import Footer from './components/Footer/Footer';
import UserSignIn from './Pages/UserSignIn/UserSignIn';
import LawyerSignIn from './Pages/LawyerSignIn/LawyerSignIn';
import SignupOption from './components/SignupOption/SignupOption';




// const router = createBrowserRouter([
//   { path: "/", element:<Home />, },
//   { path: "/home", <Home />, },
//   { path: "/legalcon", element:<Legalcon />, },
//   { path: "/about", element:<About />, },
//   { path: "/hero", element:<Hero />, },
//   { path: "/lvideos", element:<LVideos />, },
//   { path: "/qcard", element:<QCard />, },
//   { path: "/searchbar", element:<SearchBar />, },
//   { path: "/subheader", element:<SubHeader />, },
//   { path: "/blognews", element:<BlogNews />, },
//   { path: "/lawyers", element:<Lawyers />, },
//   { path: "/legaleducation", element:<LegalEducation />, },
//   { path: "/legalquestion", element:<LegalQuestion />, }, 
//   { path: "/legalvideos", element:<LegalVideos />, },
//   {
//     path: "/lawyerprofile",
//     element:<LawyerProfile />,
//     children: [
//       {
//         path: "lawyerdetails",
//         element: <LawyerDetails />,
//       },
//       {
//         path: "bookappointment",
//         element: <BookAppointment />,
//       },
//       {
//         path: "reviewsratings",
//         element: <ReviewsRatings />,
//       },
    
//      ],
//   },

// ]);

// function App() {

//   return (
//       <div>
//         <RouterProvider router={router} />
//       </div>
//   );
// }

// export default App


const App = () => {

  const [showLogin,setLogin] = useState(false);
  const [isDark, setIsDark] = useState(false);

  return (
    <>
    <StoreContextProvider>
    {showLogin?<Login setlogin={setLogin} />:<></>}

      <div className='app' data-theme={isDark? "light": "dark"}>

        <NavBar setLogin={setLogin} isCheckedtest={isDark} handleChangetest={()=>setIsDark(!isDark)} />

        <Routes>  
          
          <Route path='/' element={<Home />} />
          <Route path='/legal_consultation' element={<Legalcon />} />
          <Route path='/legal_education' element={<LegalEducation />} />
          <Route path='/lawyers' element={<Lawyers />} />
          <Route path='/legal_questions' element={<LegalQuestion />} />
          <Route path='/blogs_news' element={<BlogNews />} />
          <Route path='/lawyer_videos' element={<LegalVideos />} />

          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/lvideos" element={<LVideos />} />
          <Route path="/qcard" element={<QCard />} />
          <Route path="/searchbar" element={<SearchBar />} />
          <Route path="/subheader" element={<SubHeader />} />

          <Route 
            path="/lawyerprofile" 
            element={<LawyerProfile />} 
          >
            <Route path="lawyerdetails" element={<LawyerDetails />} />
            <Route path="bookappointment" element={<BookAppointment />} />
            <Route path="reviewsratings" element={<ReviewsRatings />} />
          </Route>

          <Route path='usersignin' element={<UserSignIn />} />
          <Route path='lawyaersignin' element={<LawyerSignIn />} />

        </Routes>

        <Footer />
      </div>
      </StoreContextProvider>
    </> 
  )
}

export default App
