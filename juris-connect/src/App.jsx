

import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Legalcon from "./Pages/Legalcon/Legalcon";
import Navbar from "./components/Header/Navbar";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Navbar />,
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
  }

]);
function App() {
  

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App
