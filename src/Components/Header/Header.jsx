import React from "react";
import { useState } from "react";
import "./Header.css";
import PiggyvestLogo from "../../images/piggyvest-logo.svg";
import { Link } from "react-router-dom";

import { VscThreeBars, VscClose } from "react-icons/vsc";

const Header = () => {
  const [responsive, setResponsive] = useState(false);
  const handleClick = () => {
    setResponsive(!responsive);
  };

  return (
    <div className="headerpage">
      <header className={responsive ? "header Expanded" : "header"}>
     
        <div className="header-container">
          <div className="header-logo">
            <img src={PiggyvestLogo} alt="PiggyVest Logo" />
          </div>

          <div className="navBtn">
            <div className="header-link">
              <Link to={"/"}>Save</Link>
              <Link to={"/"}>Invest</Link>
              <Link to={"/"}>Stories</Link>
              <Link to={"/"}>FAQs</Link>
              <Link to={"/"}>Blog</Link>
            </div>

            <div className="nav-link">
              <Link to={"/login"} className="btn btn-login">
                Sign in
              </Link>
              <Link to={"/signup"} className="btn btn-signup">
                Create free account
              </Link>
            </div>
          </div>

          <div className="toogleIcons" onClick={handleClick}>
            {responsive ? <VscClose /> : <VscThreeBars />}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
