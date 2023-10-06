import { createBrowserRouter  } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import News from "../pages/News/News";
import Blogs from '../pages/Blogs/Blogs';
import Contact from '../pages/Contact/Contact';



const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/contact",
      element: <Contact />
    },
    {
      path: "/blogs",
      element: <Blogs />
    },
    {
      path: "/news",
      element: <News />
    },
    {
      path: "/register",
      element: <Register />
    },
    {
      path: "/login",
      element: <Login />
    },
   
  ]);

export default router;