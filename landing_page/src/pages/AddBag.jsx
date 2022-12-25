import React, { useState } from "react";
import "../Style/addbag.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
let deletedata;
function AddBag() {
  const navigate = useNavigate();
  const [state, setSate] = useState(1);
  const [total,setTotal] = useState(0)
  const handlesub = () => {
    setSate(state - 1);
  };

  const handleplus = () => {
    setSate(state + 1);
  };
  let save = JSON.parse(localStorage.getItem("save"));
  // console.log(save);
  useEffect(()=>{
    setTotal(save.reduce((acc,elem)=>acc+elem.price,0))
  },[save])

  const handleremove = (index) => {
    deletedata = save.splice(index, 1);
    console.log(deletedata);
    localStorage.setItem("save", JSON.stringify(save));
    alert("delete product");
  };

  const handlecheckout = () => {
    navigate("/checkout");
  };
  return (
    <div className="j-j-addcart-section">
      <div className="j-addcart-section">
        <div className="j-a-w-e-d">
          <div className="j-SHOPPING-BAG">
            <h3>SHOPPING BAG</h3>
            <p>
              Have an account? <Link>Sign in </Link>
            </p>
          </div>
          <div className="Item-j">
            <p>Item</p>
          </div>
          {!save ? (
            <h1
              style={{
                textAlign: "center",
                fontSize: "50px",
                padding: "100px",
                fontWeight:"700px",
              }}
            >
              Add bag <br />
              <br /> empty...
            </h1>
          ) : (
            save.map((elem, index) => (
              <div className="j-add-product-cart">
                <div className="j-add-product-cart-img">
                  <img src={elem.img} alt="" />
                </div>
                <div className="j-add-product-cart-title">
                  <h4>{elem.title}</h4>
                  <p>INR {elem.price}</p>
                </div>
                <div className="j-add-product-cart-inc-des">
                  <div className="j-add-product-cart-inc-des-btn">
                    <button disabled={state === 1} onClick={handlesub}>
                      -
                    </button>
                    <p>{state}</p>
                    <button onClick={handleplus}>+</button>
                  </div>
                  <button
                    style={{ color: "red" }}
                    onClick={() => handleremove(elem, index)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <div className="j-add-product-checkout">
          <div className="j-Item-Price">
            <p>Item Price</p>
            <p>
              {"INR "}
              price
            </p>
          </div>
          <div className="j-total-Price">
            <p>Total Price</p>
            <p>INR {total}</p>
          </div>
          <p style={{ color: "gray", fontSize: "13px" }}>
            Shipping calculated in Checkout
          </p>
          <button
            className="j-add-product-checkout-button"
            onClick={handlecheckout}
          >
            Checkout
          </button>
          <p>Checkout with ESW</p>
          <br />
          <p style={{ color: "gray", fontSize: "13px" }}>
            By clicking ‘Check Out Now’, you will be redirected to the ESW
            checkout page where payment will be taken and your order fulfilled
            by ESW, J.Crew's preferred partner for international sales.
          </p>
          <br />
          <hr />
          <h4>Add a promo</h4>
          <div className="j-input-button">
            <input type="text" name="" placeholder="promo" />{" "}
            <button>APPLY</button>
          </div>
        </div>
    </div>
  );
}

export default AddBag;
