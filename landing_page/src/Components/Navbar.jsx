import React from "react";
import "../Style/NavbarFooter.css";
import { Link, useNavigate } from "react-router-dom";

import { SearchIcon } from "@chakra-ui/icons";
import SideToggle from "./SideToggle";
import { useState } from "react";

function Navbar({searchText,setSearch}) {
  let namedata = JSON.parse(localStorage.getItem("jawed_Signin"))
  let isSignIn = JSON.parse(localStorage.getItem("isSignIn"))
  const [name,setName]=useState(namedata)
  const [isSign,setIsSignIn] =useState(isSignIn)
  
  const navigate = useNavigate();
  const handleSignIn=()=>{
    navigate("/signin");
  }
  const removeClick=()=>{
    localStorage.removeItem("isSignIn")
    setIsSignIn(JSON.parse(localStorage.getItem("isSignIn")))
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
            <input type="text" placeholder="Search J.Crew" value={searchText} onChange={(e)=>setSearch(e.target.value)} />
          </div>
          <div className="sigin-j-button">
          {isSign ? <button onClick={removeClick}>{"Hi,"}{name.name}</button>:<button onClick={handleSignIn}>Sign In</button>}
            
            
          </div>
          <div>
            <Link to="/addbag">
              {" "}
              <i className="fa-solid fa-bag-shopping"></i>
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
