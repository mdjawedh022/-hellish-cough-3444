import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Payment() {
    const navigate=useNavigate()
    const [up, setup] = useState({});
    const handleChange = (e) => {
      setup({ ...up, [e.target.name]: e.target.value });
    };
    const handlezamapayment = (e) => {
        e.preventDefault();
        console.log(up);
        localStorage.setItem("jawe", JSON.stringify(up));
        alert("payment and order successful")
        navigate("/homenwomen")
      };
  return (
    <div>
      <form action=""  onSubmit={handlezamapayment}>
         <h1 style={{textAlign:"center",fontSize:"25px", fontWeight:"bold"}}>Payment</h1>
        <input type="text" placeholder="name.." name="name" onChange={handleChange}
          required />
        <input type="password" placeholder="card no.." name="card" onChange={handleChange}
          required />
        <input type="date" placeholder="dd-mm-yy" name="date" onChange={handleChange}
          required/>
        <input type="number" placeholder="cvv.." name="cvv" onChange={handleChange}
          requireda/>
        <input type="submit" />
      </form>
    </div>
  );
}

export default Payment;
