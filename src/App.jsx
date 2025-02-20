import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Welcome from "./Welcome";
import AppLayout from "./applayout/AppLayout";
import Home from "./home/Home";

const Router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        element: <Home />,
        path: "/",
      },
      {
        element: <Welcome />,
        path: "/welcome",
      },
    ]
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
