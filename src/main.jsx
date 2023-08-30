import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Homepage from './pages/Homepage.jsx';
import Roompage from './pages/Roompage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage></Homepage>,
  },
  {
    path: "/room/:roomID",
    element: <Roompage></Roompage>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
