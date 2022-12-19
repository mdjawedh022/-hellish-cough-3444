import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Checkbox } from "@chakra-ui/react";
import "../Style/Sign.css";
import { useState } from "react";
function SignIn() {
  const jawed_data = JSON.parse(localStorage.getItem("jawed_Signin"));
  console.log(jawed_data);
  const [jawedsignin, setjawedsignin] = useState({});
  const navigate = useNavigate()
  const handlechange = (e) => {
    setjawedsignin({ ...jawedsignin, [e.target.name]: e.target.value });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(jawedsignin);
    // setjawedsignin(e)
    if(
      jawedsignin.email === jawed_data.email &&
      jawedsignin.password === jawed_data.password
    ) {
      alert("signin successful");
      localStorage.setItem("isSignIn", JSON.stringify({isSignIn:true,email:jawedsignin.email}))
      // setName(JSON.parse(localStorage.getItem("jawed_Signin")).name)
      // window.open("http://localhost:3000")
      navigate("/")

    } else {
      alert("Invaild password");
    }
  };
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <h1>Sign In</h1>
        <input
          type="email"
          placeholder="Email address"
          name="email"
          onChange={handlechange}
        />
        <br />

        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={handlechange}
        />

        <div className="j-remember-me">
          <Checkbox defaultChecked>Remember me</Checkbox>
          <Link>Forgot Password?</Link>
        </div>
        <button className="j-sign-form">SIGN IN NOW</button>
        <p className="j-reCAPTCHA">
          This site is protected by reCAPTCHA and the Google Privacy Policy and
          Terms of Service apply.
        </p>
        <hr />
        <div className="j-an-account">
          <p>Don’t have an account?</p>
          <Link to="/signup">Sign up now</Link>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
