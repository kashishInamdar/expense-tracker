import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './views/Home/Home.js'; 
import Signup from "./views/Signup/Signup.js"
import { createBrowserRouter , RouterProvider} from "react-router-dom"
 
const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
    {
        path : "/",
        element : <Home />
    },
    {
        path : "/signup",
        element : <Signup />
    }

])

root.render(<RouterProvider router={router} />)