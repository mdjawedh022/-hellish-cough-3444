import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import "../Style/Sign.css";
import { useState } from "react";
function SignUp() {
  const navigate = useNavigate()
  const [signup, setsignup] = useState({});
  const handleChange = (e) => {
    setsignup({ ...signup, [e.target.name]: e.target.value });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(signup);
    localStorage.setItem("jawed_Signin",JSON.stringify(signup))
  };

  const siginPage=()=>{
    navigate("/signin")
  }
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <h1>Sign Up</h1>
        <input
          type="text"
          name="name"
          placeholder="Name..."
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email address"
          onChange={handleChange}
          required
        />
        <br />

        <input
        required
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
        />
        <select name="Country" onChange={handleChange}>
          <option value="">Country</option>
          <option value="ind">India</option>
          <option value="eg">Egypt</option>
          <option value="estronia">Estonia</option>
          <option value="finland">Finland</option>
          <option value="fran">France</option>
          <option value="germany">Germany</option>
          <option value="iceland">Iceland</option>
          <option value="afganistan">Afganistan</option>
        </select>
        <div className="j-remember-me">
          <Checkbox defaultChecked>Remember me</Checkbox>
        </div>
        <input type="submit" className="j-sign-form" value="SIGN UP NOW " onClick={siginPage}/>
        <p className="j-reCAPTCHA">
          By clicking "Create an Account", you agree to our Terms of Use and
          Privacy Policy, including the Use of Cookies and the transfer of your
          personal information to the United States, a jurisdiction that may not
          provide an equivalent level of data protection to the laws in your
          home country.
        </p>
        <hr />
        <div className="j-an-account">
          <p>Already have an account?</p>
          <Link to="/signIn">Sign In</Link>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
