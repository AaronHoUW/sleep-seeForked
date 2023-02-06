import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../img/logo.png"
import { Link } from 'react-router-dom';
import { useState } from 'react';
function Navbar() {
    const [navOpen, setNavOpen] = useState(false)

    return (
        <div className="nav">
            <div className="nav-container">
                <div className="navbar">
                    <NavLink className="navbar-brand brand font-weight-bold ms-3" to="/" aria-label="Logo and Home Button">
                        <img className="logo_pic" src={logo} alt='logo'></img>
                    </NavLink>
                    <h1>Sleep&See</h1>
                    <div className='menu-toggle' onClick={() => setNavOpen(!navOpen)}>
                        <div className={navOpen ? "hamBox hamBoxOpen" : "hamBox"}>
                            <span className={navOpen? "lineTop spin" : "lineTop"}></span>
                            <span className={navOpen? "lineBottom spin" : "lineBottom"}></span>
                        </div>
                    </div>
                </div>
                <div className="nav-overlay" style={{
                    top: navOpen ? "0" : "-100%",
                    transitionDelay: navOpen ? "0s" : "0s"
                }}>
                    <ul className="nav-links">
                        <li className="nav-item">
                            <Link to="/about" onClick={() => setNavOpen(!navOpen)}style={{
                            top: navOpen ? "0" : "120px",
                            transitionDelay: navOpen ? "0.9s" : "0s",
                        }}>about</Link>
                            <div className="nav-item-wrapper"></div>
                        </li>
                        <li className="nav-item">
                            <Link to="/resources" onClick={() => setNavOpen(!navOpen)}style={{
                            top: navOpen ? "0" : "120px",
                            transitionDelay: navOpen ? "1s" : "0s",
                        }}>resources</Link>
                            <div className="nav-item-wrapper"></div>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" onClick={() => setNavOpen(!navOpen)}style={{
                            top: navOpen ? "0" : "120px",
                            transitionDelay: navOpen ? "1.1s" : "0s",
                        }}>login</Link>
                            <div className="nav-item-wrapper"></div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    //     <nav className='navbar navbar-expand-lg justify-content-between'>
    //         <NavLink className="navbar-brand brand font-weight-bold ms-3" to="/" aria-label="Logo and Home Button">
    //             <img className="logo_pic" src={logo} alt='logo'></img>
    //         </NavLink>
    //         <div className="form-inline" id="navbarSupportedContent">
    //             <ul className="navbar-nav me-auto ms-auto">
    //                 <li className='nav-item me-5'>
    //                     <NavLink className='text-purple' to='/about'>about</NavLink>
    //                 </li>
    //                 <li className='nav-item me-5'>
    //                     <NavLink className='text-purple' to='/resources'>resources</NavLink>
    //                 </li>
    //                 <li className='nav-item me-5'>
    //                     <NavLink className='text-purple' to='/login'>login</NavLink>
    //                 </li>
    //             </ul>
    //         </div>
    //   </nav>
    )
}

export default Navbar;