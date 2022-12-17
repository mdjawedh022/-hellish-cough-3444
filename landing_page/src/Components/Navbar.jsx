import React from "react";
import "../Style/NavbarFooter.css";
import { Link, useNavigate } from "react-router-dom";

import { SearchIcon } from "@chakra-ui/icons";
import SideToggle from "./SideToggle";

function Navbar() {
  const navigate = useNavigate();
  const handleSignIn=()=>{
    navigate("/signin");
  }
  return (
    <div className="j-main-navbar-section">
      <div className="j-navbar">
        <div className="j-iconbutton">
          {" "}
          <SideToggle />
        </div>
        <div className="j-navbar-logo-main">
          <div className="j-logo">
            <Link to="/">J.CREW</Link>
          </div>
          <div className="j-product-navbar">
            <Link to="/">
              <ul>Gift</ul>
            </Link>
            <Link to="/">
              <ul>New</ul>
            </Link>
            <Link to="/homewomen">
              {" "}
              <ul>Women</ul>
            </Link>
            <Link to="/homemen">
              {" "}
              <ul>Men</ul>
            </Link>
            <Link to="/">
              {" "}
              <ul>Kids</ul>
            </Link>
            <Link to="/">
              {" "}
              <ul>Cashmere</ul>
            </Link>
            <Link to="/">
              {" "}
              <ul>Home</ul>
            </Link>
            <Link to="/">
              <ul>Stories</ul>
            </Link>
            <Link to="/">
              <ul>Sale</ul>
            </Link>
          </div>
        </div>

        <div className="j-signIn-navbar">
          <div className="j-input-navbar">
            <SearchIcon />
            <input type="text" placeholder="Search J.Crew" />
          </div>
          <div className="sigin-j-button">
            <button onClick={handleSignIn}>Sign In</button>
          </div>
          <div>
            <Link>
              {" "}
              <i class="fa-solid fa-bag-shopping"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="j-navbar-second-div">
        <p>Have a question? We can help.</p>
      </div>
    </div>
  );
}

export default Navbar;
