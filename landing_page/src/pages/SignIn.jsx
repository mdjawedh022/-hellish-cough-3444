import React from 'react'
import {Link} from "react-router-dom"
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import "../Style/Sign.css"
function SignIn() {
  return (
    <div>
      <form action="">
        <h1>Sign Up</h1>
        <input type="email" placeholder='Email address' /><br />
       
        <input type="password" placeholder='password'/>
        
        <div className='j-remember-me'><Checkbox defaultChecked>Remember me</Checkbox><Link>Forgot Password?</Link></div>
        <button className='j-sign-form'>SIGN IN NOW</button>
        <p className='j-reCAPTCHA'>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
        <hr />
        <div className='j-an-account'><p>Don’t have an account?</p><Link>Sign up now</Link></div>
      </form>
    </div>
  )
}

export default SignIn
