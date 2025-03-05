import { BrowserRouter, createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { useState, useEffect, use } from "react";
import "./App.css";
import Welcome from "./Welcome";
import AppLayout from "./applayout/AppLayout";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Dashboard from "./dashboard/Dashboard";
import AdminLayout from "./layout/AdminLayout";
import HotelList from "./dashboard/HotelList";
import UserList from "./dashboard/UserList";
import Adminprofile from "./dashboard/Adminprofile";
import Router from "./routers";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const [userData, setUserData] = useState(undefined);

  const userData = localStorage.getItem("user");
  console.log('userData: ', userData);

  // useEffect(() => {
  //   const userData = localStorage.getItem("user");
  //   if (userData) {
  //     setUserData(userData);
  //   } else {
  //     setIsAuthenticated(false);
  //   }
  //   

  // }, []);


  useEffect(() => {
    // const userData = localStorage.getItem("user");
    if (userData) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }

  }, [userData]);

  console.log('isAuthenticated: ', isAuthenticated);
  // const Router = createBrowserRouter([

  //   {
  //     // element: !isAuthenticated ? <Login /> : <AppLayout />,
  //     element: isAuthenticated ? <Navigate to="/home" replace /> : <Login />,
  //     path: "/",
  //   },
  //   {
  //     element: <SignUp />,
  //     path: "/signup",
  //   },

  //   {
  //     element: isAuthenticated ? <AppLayout /> : <Login />,
  //     // element: isAuthenticated ? <AppLayout /> : <Navigate to="/" replace />,

  //     children: [
  //       {
  //         element: <Home />,
  //         path: "/home",
  //       },
  //       {
  //         element: <Contact />,
  //         path: "/contact",
  //       },
  //       {
  //         element: <Welcome />,
  //         path: "/welcome",
  //       },
  //       {
  //         element: <Rooms />,
  //         path: "/rooms",
  //       },
  //       {
  //         element: <AboutUs />,
  //         path: "/about-us",
  //       },
  //       {
  //         element: <Profile />,
  //         path: "/profile",
  //       },
  //     ],
  //   },

  //   {
  //     element: isAuthenticated ? <AdminLayout /> : <Login />,
  //     children: [
  //       {
  //         element: <Dashboard />,
  //         path: "/admin/",
  //       },
  //       {
  //         element: <HotelList />,
  //         path: "/admin/hotel-list",
  //       },
  //       {
  //         element: <UserList />,
  //         path: "/admin/user-list",
  //       },
  //       {
  //         element: <Adminprofile />,
  //         path: "/admin/admin-profile",
  //       },
  //     ],
  //   },
  // ]);

  return (
    <div>
      {/* <RouterProvider router={Router} /> */}
      <BrowserRouter >
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
