import React from "react";
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
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useState } from "react";

function SideToggle() {
  const navigate = useNavigate();

  
  function handleclick() {
    navigate("/signin");
  }
  
  function handlewomen() {
    navigate("/homewomen");
  }

  function handleMen() {
    // localStorage.removeItem("user-info");
    navigate("./homemen");
  }

  return (
    <div>
      <Menu>
        <MenuButton
       
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="outline"
        ></MenuButton>
        <MenuList
          width={250}
          h={950}
          fontSize={20}
          borderRadius={0}
          marginLeft={-3}
          marginTop={1}
        >
          <MenuGroup>
            <MenuItem onClick={handleclick}>
              <button style={{ background: "rgb(15, 106, 97)",padding:"5px 70px",color:"white",fontSize:"15px",fontWeight:"600"}} >
                SIGN IN
              </button>
              
            </MenuItem>
            <MenuItem  >
              <div
                style={{
                  display: "flex",
                  gap: "130px",
                  fontSize: "17px",
                  fontWeight: "600",
                }}
              >
                <p style={{ color: "red" }}>Gift </p>
                <span>{">"}</span>
              </div>
            </MenuItem>
            <MenuItem>
              <div
                style={{
                  display: "flex",
                  gap: "123px",
                  fontSize: "17px",
                  fontWeight: "600",
                }}
              >
                <p>New </p>
                <span>{">"}</span>
              </div>
            </MenuItem>
            <MenuItem onClick={handlewomen}>
              <div
                style={{
                  display: "flex",
                  gap: "98px",
                  fontSize: "17px",
                  fontWeight: "600",
                }}
              >
                <p>Women </p>
                <span>{">"}</span>
              </div>
            </MenuItem>
            <MenuItem onClick={handleMen}>
              <div
                style={{
                  display: "flex",
                  gap: "123px",
                  fontSize: "17px",
                  fontWeight: "600",
                }}
              >
                <p>Men </p>
                <span>{">"}</span>
              </div>
            </MenuItem>
            <MenuItem>
              <div
                style={{
                  display: "flex",
                  gap: "124px",
                  fontSize: "17px",
                  fontWeight: "600",
                }}
              >
                <p>Grils</p>
                <span>{">"}</span>
              </div>
            </MenuItem>
            <MenuItem>
              <div
                style={{
                  display: "flex",
                  gap: "123px",
                  fontSize: "17px",
                  fontWeight: "600",
                }}
              >
                <p> Boys </p>
                <span>{">"}</span>
              </div>
            </MenuItem>
            <MenuItem>
              {" "}
              <div
                style={{
                  display: "flex",
                  gap: "114px",
                  fontSize: "17px",
                  fontWeight: "600",
                }}
              >
                <p>Shoes </p>
                <span>{">"}</span>
              </div>{" "}
            </MenuItem>
            <MenuItem>
              {" "}
              <div
                style={{
                  display: "flex",
                  gap: "73px",
                  fontSize: "17px",
                  fontWeight: "600",
                }}
              >
                <p>Accessories </p>
                <span>{">"}</span>
              </div>{" "}
            </MenuItem>
            <MenuItem>
              {" "}
              <div
                style={{
                  display: "flex",
                  gap: "84px",
                  fontSize: "17px",
                  fontWeight: "600",
                }}
              >
                <p>Cashmere </p>
                <span>{">"}</span>
              </div>{" "}
            </MenuItem>
            <MenuItem>
              {" "}
              <div
                style={{
                  display: "flex",
                  gap: "113px",
                  fontSize: "17px",
                  fontWeight: "600",
                }}
              >
                <p>Home </p>
                <span>{">"}</span>
              </div>{" "}
            </MenuItem>
            <MenuItem>
              {" "}
              <div
                style={{
                  display: "flex",
                  gap: "107px",
                  fontSize: "17px",
                  fontWeight: "600",
                }}
              >
                <p>Stories </p>
                <span>{">"}</span>
              </div>{" "}
            </MenuItem>
            <MenuItem>
              {" "}
              <div
                style={{
                  display: "flex",
                  gap: "128px",
                  fontSize: "17px",
                  fontWeight: "600",
                }}
              >
                <p style={{ color: "red" }}>Sale </p>
                <span>{">"}</span>
              </div>{" "}
            </MenuItem>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup>
            <MenuItem>
              <p style={{ fontSize: "13px" }}>Have a question? We can help.</p>
              <Link style={{ fontSize: "13px" }}>Details</Link>
            </MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </div>
  );
}

export default SideToggle;
