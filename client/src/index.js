import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './views/Home/Home.js'; 
import MyTransaction from './views/MyTransaction/MyTransaction.js';
import Signup from "./views/Signup/Signup.js"
import Login from './views/Login/Login.js';
import { createBrowserRouter , RouterProvider} from "react-router-dom"
import AddTransaction from './views/AddTransaction/AddTransaction.js';
import UpdateTransaction from './views/UpdateTransaction/UpdateTransaction.js';
 
const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
    {
        path : "/",
        element : <Home />
    },
    {
        path : "/transactions",
        element : <MyTransaction />
    },
    {
        path : "/signup",
        element : <Signup />
    },
    {
        path : "/login",
        element : <Login />
    },
    {
        path : "/add-transaction",
        element : <AddTransaction />
    },
    {
        path : "update-transaction/:id",
        element : <UpdateTransaction />
    }

])

root.render(<RouterProvider router={router} />)