import React from 'react'
import './Header.css'
import PiggyvestLogo from '../../images/piggyvest-logo.svg';
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div className='headerpage'>

        <header className="header">
            <div className="header-container">
                <div className="header-box">
                <div className="header-logo">
                    <img src={PiggyvestLogo} alt="PiggyVest Logo" />
                </div>
                <div className="header-link">
                    <Link to={'/'}>Save</Link> 
                    <Link to={'/'}>Invest</Link> 
                    <Link to={'/'}>Stories</Link> 
                    <Link to={'/'}>FAQs</Link> 
                    <Link to={'/'}>Blog</Link> 
                </div>
                </div>

                <div className="nav-link">
                <Link to={'/login'} className="btn btn-login">Sign in</Link>
                <Link to={'/signup'} className="btn btn-signup">Create free account</Link>
                </div>
            </div>
        </header>

    </div>
  )
}

export default Header