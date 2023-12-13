import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import menu from "./menu.png"


function Navbar() {
  const [userdata, setUserdata] = useState({});
  const[menuBtn , setMenuBtn] = useState("disply") 

  const navbar = ()=>{

  }

  useEffect(() => {
    const userFromlocalStorage = JSON.parse(localStorage.getItem('user') || '{}');
    setUserdata(userFromlocalStorage);
  }, [])

  return (
    <div className='nav-container'>
      <Link to='/'className='logo' > <span className='logoname'><span className='F'>Ex</span>pense<span className='F'>T</span>racker</span></Link>
      <img src={menu} alt="menu" className='menu-btn'
      onClick={()=>{
        setMenuBtn(menuBtn == "disply" ? "-" : "disply")
      }}
      />
      <div className={`${menuBtn}`}>
      {/* <Link to="/orders" className='nav-btn'>My Orders</Link> */}

        <Link to="/transactions" className='nav-btn'>Transactions</Link>
        <Link to="/add-transaction" className='nav-btn'>Add Transaction</Link>
        <Link to="/signup" className='nav-btn'>Signup</Link>
        <Link to="/login" className='nav-btn'>Login</Link>
        
      </div>

      <div className={`user ${menuBtn}`}>
        Hay!😊{userdata.name}

        {
          userdata?.name? (<button className='btn-logout'
          onClick={()=>{
            localStorage.removeItem("user");
            window.location.href = "/login"
          }}
          >Logout</button>) : null
        }
      </div>

    </div>
  )
}

export default Navbar