import React from "react";
import "../Style/quick.css";
import { Link, useNavigate } from "react-router-dom";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

let arr = JSON.parse(localStorage.getItem("save")) || [];

function QuickShop() {
  const navigate = useNavigate();

  const get_addcart = JSON.parse(localStorage.getItem("save_quick"));
  console.log(get_addcart);


  const handlecartsection=(item)=>{
    arr.push(item);
    localStorage.setItem("save", JSON.stringify(arr));
    // navigate("/addbag");
  }
  return (
    <>
      <div>
       {get_addcart.map((elem,index)=>{
        return  <div key={index}  className="j-quickshop">
        <div className="j-quickshop-img">
          <img src={elem.img} />
        </div>
        <div className="j-product-detail">
          <p className="j-product-detail-p1">{elem.badge}</p>
          <br />
          <h2>{elem.title}</h2>
          <p className="item-BM538">item BM538</p>
          <br />
          <div className="j-price-quick">
            {" "}
            <p style={{ textDecoration: "line-through" }}>{elem.orPrice}</p>
            <p>INR {elem.price}</p>
            <p>{elem.tile__detail}</p>
          </div>
          <div className="j-reveiws">
            {" "}
            <img
              src="https://jcrew.ugc.bazaarvoice.com/1706redes-en_us/3_6/5/rating.png"
              alt=""
            />
            <Link>18 REVIEWS</Link>{" "}
          </div>
          <div className="j-color-quick">
            <div>
              <p>Color</p>
            </div>
            <div className="j-color-buuton-quick">
              <button
                style={{
                  background: "pink",
                  padding: "15px",
                  borderRadius: "50%",
                  marginLeft: "10px",
                }}
              ></button>
              <button
                style={{
                  background: "red",
                  padding: "15px",
                  borderRadius: "50%",
                  marginLeft: "10px",
                }}
              ></button>
              <button
                style={{
                  background: "black",
                  padding: "15px",
                  borderRadius: "50%",
                  marginLeft: "10px",
                }}
              ></button>
              <button
                style={{
                  background: "darkgreen",
                  padding: "15px",
                  borderRadius: "50%",
                  marginLeft: "10px",
                }}
              ></button>
            </div>
          </div>
          <p>Prices include duties and taxes.</p>
          <div className="j-FINAL-SALE">
            <p style={{ color: "darkred", fontWeight: "bold" }}>
              FINAL SALE:
            </p>
            <span>
              black, size one size is available but cannot be exchanged or
              returned. Valid while supplies last. All sales final
            </span>
          </div>
          <div>
            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Size&Fit
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <li>Body Length 23".</li>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Product Details
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <ul>
                    {" "}
                    A twist on the classic T-shirt, thanks to sweet,
                    puff-sleeve details and a long-sleeve silhouette.
                  </ul>

                  <li>100% cotton.</li>
                  <li>Machine wash.</li>
                  <li>Import.</li>
                  <li>Select stores.</li>
                  <li>Item BP019.</li>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="j-button-add-to-bag">
            <button className="j-ADD-TO-BAG-button"  onClick={() => handlecartsection(elem)}>ADD TO BAG</button>
            <button className="j-fa-regular-icon">
              <i className="fa-regular fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
       })}
      </div>
    </>
  );
}

export default QuickShop;
