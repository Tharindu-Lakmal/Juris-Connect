

import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Legalcon from "./Pages/Legalconsultation/Legalcon";
import Navbar from "./components/Header/Navbar";
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
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



const router = createBrowserRouter([
  {
    path: "/",
    element:<Home />,
  },
  {
    path: "/home",
    element:<Home />,
  },
  {
    path: "/legalcon",
    element:<Legalcon />,
  },
  {
    path: "/about",
    element:<About />,
  },
  {
    path: "/hero",
    element:<Hero />,
  },
  {
    path: "/lvideos",
    element:<LVideos />,
  },
  {
    path: "/qcard",
    element:<QCard />,
  },
  {
    path: "/searchbar",
    element:<SearchBar />,
  },
  {
    path: "/subheader",
    element:<SubHeader />,
  },
  {
    path: "/blognews",
    element:<BlogNews />,
  },
  {
    path: "/lawyers",
    element:<Lawyers />,
  },
  {
    path: "/legaleducation",
    element:<LegalEducation />,
  },
  {
    path: "/legalquestion",
    element:<LegalQuestion />,
  }, 
  {
    path: "/legalvideos",
    element:<LegalVideos />,
  },
  {
    path: "/lawyerprofile",
    element:<LawyerProfile />,
    children: [
      {
        path: "lawyerdetails",
        element: <LawyerDetails />,
      },
      {
        path: "bookappointment",
        element: <BookAppointment />,
      },
      {
        path: "reviewsratings",
        element: <ReviewsRatings />,
      },
    
     ],
  },


]);
function App() {
  

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App
