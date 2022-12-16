import React from "react";
import "../Style/NavbarFooter.css";
import { Link, useNavigate } from "react-router-dom";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  IconButton,
  MenuDivider,
  // useDisclosure,
} from "@chakra-ui/react";
import { SearchIcon, HamburgerIcon} from "@chakra-ui/icons";
// import { useState } from "react";
function Navbar() {
    
    
    const navigate = useNavigate()
  // const { colorMode, toggleColorMode } = useColorMode();
  //   const[state,setState]=useState(true)
  // const { isOpen, onOpen, onClose } = useDisclosure();


  function handleChange1(){
    navigate("/signin")
}
function handleclick(){
navigate("/signin")
}
function handleclick1(){
navigate("/signup")
}

function handlehome(){
navigate("/")
}
function logout(){
localStorage.removeItem("user-info")
navigate("/signin")
}

  return (
    <div>
      <div className="j-navbar">
        <div className="j-iconbutton">
          {" "}
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
            ></MenuButton>
            <MenuList width={350} h={950} fontSize={20} marginLeft={-3}>
              <MenuGroup>
                <MenuItem onClick={handlehome}>
                  <i className="fa-solid fa-house-chimney"></i>Home
                </MenuItem>
                <MenuItem>
                  <i className="fa-sharp fa-solid fa-list-ul"></i>Internships
                </MenuItem>
                <MenuItem>
                  <i className="fa-solid fa-user-plus"></i>Jobs
                </MenuItem>
                <MenuItem>
                  <i className="fa-solid fa-square-plus"></i> Post Intership
                </MenuItem>
                <MenuItem>
                  {" "}
                  <i className="fa-solid fa-book-bookmark"></i>Courses
                </MenuItem>
                <MenuItem>
                  <i className="fa-solid fa-phone"></i>Contact Us
                </MenuItem>
              </MenuGroup>
              <MenuDivider />
              <MenuGroup>
                <MenuItem onClick={handleclick1}>
                  <i className="fa-solid fa-bars-staggered"></i>Register
                </MenuItem>
                <MenuItem onClick={handleclick}>
                  <i className="fa-solid fa-door-closed"></i>Login
                </MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
        </div>
        <div className="j-navbar-logo-main">
          <div className="j-logo">
            <Link>J.CREW</Link>
          </div>
          <div className="j-product-navbar">
            <Link to="/">
              <ul>Gift</ul>
            </Link>
            <Link to="/">
              <ul>New</ul>
            </Link>
            <Link to="/">
              {" "}
              <ul>Women</ul>
            </Link>
            <Link to="/">
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
          <div>
            <button>Sign In</button>
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
