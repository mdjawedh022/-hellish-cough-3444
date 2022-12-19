import "../Style/landing.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Slider from "../Components/Slider";
import SeeMore from "../ImageUrl/SeeMore";
import { useState } from "react";
import loveSection from "../ImageUrl/loveSection";
import Stories from "../ImageUrl/Stories";
import collective from "../ImageUrl/collective";

function Landing() {
  const [data, setData] = useState(SeeMore);
  const [love, setLove] = useState(loveSection);
  const [store, setStore] = useState(Stories);
  const [collect, setCollect] = useState(collective);
  const navigate = useNavigate();

  const handlefemale=()=>{
    navigate("./homewomen")
  }
  const handlemale=()=>{
    navigate('./homemen')
  }
  return (
    <>
      <div className="j-landing-main">
        {/* ---------------banner--------------------- */}
        <div className="j-banner">
          <div className="j-tags">
            <h1>The J.Crew Gift Guide</h1>
            <p>
              Great holiday presents are part of our heritage.Here's our take...
            </p>
          </div>
          <div className="j-tag">
            <div className="j-link-button-grid">
             
                <button onClick={handlefemale}>Shop for her</button>
             
                <button onClick={handlemale}>Shop for him</button>
             
                <button>Shop for girls</button>
             
                <button>Shop for boys</button>
            
                <button>shop for the home</button>
             
            </div>
          </div>
        </div>
        {/* ---------------------------shop------------------- */}
        <div className="j-shop">
          <div className="j-shop1">
            <h1>Going Somewhere snowy?</h1>
            <Link to="">Visit the Ski Shop</Link>
          </div>
          <div className="j-shop2">
            <h1>Going Somewhere beachy?</h1>
            <Link to="">Visit the Sun Shop</Link>
          </div>
          <div className="j-shop3">
            <h1>Fact:Sweaters make great gifts</h1>
            <Link to="">One for then,one for you</Link>
          </div>
          <div className="j-shop4">
            <h1>Not-So-Snooze-worthy pj's</h1>
            <Link to="">Shop our holiday</Link>
            <br />
            <Link to="">Shop pj's for the whole family</Link>
          </div>
          <div className="j-shop5">
            <h1>Our warmestCoats</h1>
            <Link to="">Bundle up</Link>
          </div>
          <div className="j-shop6">
            <h1>Your NYE outfit awaits...</h1>
            <Link to="">Shop new arrivals</Link>
            <br />
            <Link to="">Visit the Holiday Party Shop</Link>
          </div>
        </div>

        {/* ------------------------collective------------------------------- */}

        <div className="j-button">
        <h1>Shop New Arriavals</h1>
          <Link to="">
            {" "}
            <button>Shop Women</button>
          </Link>
          <Link to="">
            {" "}
            <button>Shop Men</button>
          </Link>
          <Link to="">
            <button>Shop Girls</button>
          </Link>
          <Link to="">
            {" "}
            <button>Shop Boys</button>
          </Link>
        </div>

        {/* ------------------------------------------collective------------------------------------- */}
        <div className="j-collective">
          <div className="j-collective-box">
            <img
              src="https://www.jcrew.com/brand_creative/2022/202204-Apr/logo_jcrew_collective_20220315_blk.png?imformat=generic"
              alt=""
            />
            <span>Meet our creative community →</span>
          </div>
          <div className="j-collective-box1">
            {/* -------------------collective_section_1----------------------------------- */}

            {collect.map((elem,index) => (
              <div key={index}>
                <img src={elem.img} alt="" />
                <p>{elem.ptag}</p>
                <h1>{elem.h1tag}</h1>
                <Link to="">{elem.link}</Link>
              </div>
            ))}
          </div>

          {/* ------------------------Stories-------------------- */}
          <div className="j-stories">
            <div>
              <h1 className="j-more">More Stories</h1>
            </div>
            <div className="j-stories-main">
              {store.map((elem,index) => (
                <div key={index}>
                  <img src={elem.img} alt="" />
                  <h1>{elem.title}</h1>
                  <Link>{elem.link}</Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ----------------------- */}

        <div className="j-love-section">
          <div>
            <h2 className="Love">You'll Also Love</h2>
          </div>
          <div className="j-love-section-main">
            {love.map((elem,index) => (
              <div key={index}>
                <img src={elem.img} alt="" />
              </div>
            ))}
          </div>
        </div>

        {/* -------------------------------------------------Carousel----------------------------------- */}

        <div className="j-slider-increw">
          <div className="j-increw">
            <h1>Shop our Instagram</h1>
            <br />
            <p>(and join the fun with #injcrew)</p>
          </div>
          <div>
            <Slider />
          </div>
        </div>

        {/* ---------------------------SeeMore----------------------------------- */}
        <div className="j-see-more-main">
          <h1>More you need to see</h1>
          <div className="j-see-more-present">
            {data.map((elem,index) => (
              <div className="j-seeMore" key={index}>
                <img src={elem.img} alt="" />
                <Link>{elem.title}</Link>
              </div>
            ))}
          </div>
        </div>

        {/* -----------------------recentlysection------------------ */}
        <div className="j-recently"></div>
      </div>
    </>
  );
}

export default Landing;
