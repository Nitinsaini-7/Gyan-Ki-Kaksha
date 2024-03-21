import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from './logo.png';
import "./Header.css"
function Header(){
  const[click, setClick] = useState(false);
    return(
      <header>
        <nav className="flexSB">
          <div className="logo">
            <img src={logo} alt="logo" />    
          </div>
          <ul className={click ? "mobile-nav" : "flexSB"} onClick={()=> setClick(false)} >
            <li>
                <Link to='/' className="nav-name"> Home </Link>
            </li>

            <li>
                <Link to='/about' className="nav-name">About</Link>
            </li>

            <li>
              <Link to='/courses' className="nav-name">Courses </Link>
            </li>

            <li>
                <Link to='/price' className="nav-name">Prices</Link>
            </li>
                      
            <li>
                <Link to='/team' className="nav-name">Team</Link>
            </li>

            <li>
              <Link to='/contact' className="nav-name"> Contact</Link>
            </li>
          </ul>

          <div className="login-signup">
            <button className="login-btn">Login</button>
            <button className="signup-btn">Signup</button>
          </div>
          <button className="toggle" onClick={()=> setClick(!click)}>
            {click ? <i className="fa-solid fa-xmark"></i>:<i className="fa-solid fa-bars"></i>}
          </button>
        </nav>
      </header>
    )
}
export default Header;