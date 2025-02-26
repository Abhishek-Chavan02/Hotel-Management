import { createBrowserRouter, RouterProvider } from "react-router-dom";
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

const Router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        element: <Home />,
        path: "/",
      },
      {
        element: <Login />,
        path: "/login",
      },
      {
        element: <SignUp />,
        path: "/signup",
      },
      {
        element: <Contact />,
        path: "/contact",
      },
      {
        element: <Welcome />,
        path: "/welcome",
      },
      {
        element: <Rooms />,
        path: "/rooms",
      },
      {
        element: <AboutUs />,
        path: "/about-us",
      },
      {
        element: <Profile />,
        path: "/profile",
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
