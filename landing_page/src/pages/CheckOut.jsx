import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Style/checkout.css";
// import { Input } from '@chakra-ui/react'

function CheckOut() {
    const navigate=useNavigate()
  const [sign, setsign] = useState({});
  const handleChange = (e) => {
    setsign({ ...sign, [e.target.name]: e.target.value });
  };
  const handlezamadata = (e) => {
    e.preventDefault();
    console.log(sign);
    localStorage.setItem("jawed", JSON.stringify(sign));
    alert("successful")
    navigate("/payment")
  };
 
  return (
    <div>
      <form action="" className="checkout-jj" onSubmit={handlezamadata}>
        <h1>Checkout</h1>
        <div className="j-div-checkout">
          <input type="text" placeholder="first name.." name="first"  onChange={handleChange}
          required />
          <input type="text" placeholder="last name.." onChange={handleChange}
          required />
        </div>
        <div className="j-div-checkout">
          <input type="text" name="" placeholder="city.."  onChange={handleChange}
          required/>
          <input type="text" name="" placeholder="street/location/landmarks" onChange={handleChange}
          required />
        </div>
        <div className="j-div-checkout">
          <input type="text" placeholder="state.."  onChange={handleChange}
          required/>
          <input type="number" name="" placeholder="pin code.." onChange={handleChange}
          required />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}

export default CheckOut;
