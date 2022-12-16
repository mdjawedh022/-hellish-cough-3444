import React from "react";
import { Link } from "react-router-dom";
import "../Style/NavbarFooter.css";

function Footer() {
  return (
    <div>
      <div className="j-footer-main">
        <div className="j-footer-main-logo">
          <Link>
            <i className="fa-brands fa-twitter"></i> @j.crew_help
          </Link>
          <Link>
            <i className="fa-solid fa-phone"></i> 1 434 385 5775p
          </Link>
          <Link>
            <i className="fa-sharp fa-solid fa-envelope"></i> Email Us
          </Link>
        </div>
      </div>
      <div className="j-footer-parent">
        <div className="j-footer-child">
          <div className="j-footer-written-part">
            <div className="footer-write">
              <div>
                <p>Help</p>
                <ul>Customer Service</ul>
                <ul>Track Order</ul>
                <ul>Returns & Exchanges</ul>
                <ul>Shipping</ul>
                <ul>International Orders</ul>
                <ul>Contact Us</ul>
              </div>
              <div>
                <p>Quick Links</p>
                <ul>Find a Store</ul>
                <ul>Size Charts</ul>
                <ul>Refer a Friend</ul>
                <ul>Offers & Promotions</ul>
                <ul>My Favorites</ul>
              </div>
              <div>
                <p>About J.Crew</p>
                <ul>Our Story</ul>
                <ul>Careers</ul>
                <ul>Social Responsibility</ul>
                <ul>California Transparency Act/Modern Slavery Act</ul>
                <ul>Investor Relations</ul>
                <ul>Terms of Use</ul>
                <ul>Privacy Policy</ul>
                <ul>California Do Not Sell My Personal Information</ul>
                <ul>Diversity, Equity and Inclusion at J.Crew Group</ul>
              </div>
            </div>
            <div className="j-social-section">
                <div className="j-secial-media">
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-twitter"></i> 
                <i className="fa-brands fa-linkedin"></i>
                <i className="fa-brands fa-pinterest"></i>
                <i className="fa-brands fa-youtube"></i>
                </div>
                <div>
                    <div className="j-india"><Link>india</Link><img style={{width:"4%",height:"3%",marginTop:'5px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUKmVmquV0wSkDYeqg0tMMybLRjrbVMulw8Q&usqp=CAU" alt="" /></div>
                   
                    <div className="j-madewrll">
                        <h2>madewrll</h2>
                        <h2>J.crew</h2>
                    </div>
                    <p>© 2022 J.Crew</p>
                </div>
            </div>
          </div>
          {/* ............................. */}
          <div className="j-like-section">
            <p style={{ color: "balck", fontWeight: "bold" }}>
              Like Being First?
            </p>
            <br />
            <p className="j-p-get">
              Get can't-miss style news, before everybody else.
            </p>
            <input type="text" name="" placeholder="Enter Your Email." />
            <button>SIGN UP</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
