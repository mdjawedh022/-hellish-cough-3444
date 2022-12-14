import React, { useState } from "react";
// import  "./langing.css"
// import stylea from './'
import "../Components/landing.css"
import { Link } from "react-router-dom";
// import { BsHeartFill, BsHeart } from "react-icons/bs";
// import { Flex, Slider } from "@chakra-ui/react";
import { Slider } from "./Slider";
function Landing() {
  const [liked, setLiked] = useState(false);
  return (
    <>
      <div>
        {/* ---------------banner--------------------- */}
        <div className="j-banner">
          <div className="j-tags">
            <h1>The J.Crew Gift Guide</h1>
            <p>
              Great holiday presents are part of our heritage.Here's our take...
            </p>
          </div>
          <div className="j-tag">
            <button>Shop for her</button>
            <button>Shop for him</button>
            <button>Shop for girls</button>
            <button>Shop for boys</button>
            <button>shop for the home</button>
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
            <div>
              <img
                src="https://www.jcrew.com/brand_creative/homepage2022/11-Nov/2022nov_1025_hp_w_img12.jpg"
                alt=""
              />
              <p>Creative Spirits Series</p>
              <h1>Marie Marot X J.Crew</h1>
              <Link to="">Shop our collab</Link>
            </div>
            <div>
              <img
                src="https://www.jcrew.com/brand_creative/homepage2022/10-Oct/2022oct_0927_hp_w_img7.jpg"
                alt=""
              />
              <p>That fall feeling</p>
              <h1>Layer love with Marjon Carlos</h1>
              <Link to="">Shop her story</Link>
            </div>
            <div>
              <img
                src="https://www.jcrew.com/brand_creative/homepage2022/10-Oct/2022oct_0927_hp_w_img8.jpg"
                alt=""
              />
              <p>Heritage made modern</p>
              <h1>A Cashmere Remix with Lucy Williams</h1>
              <Link to="">Shop her story</Link>
            </div>
          </div>

          {/* ------------------------Stories-------------------- */}
          <div className="j-stories">
            <div>
              <h1 className="j-more">More Stories</h1>
            </div>
            <div className="j-stories-main">
              <div>
                <img
                  src="https://www.jcrew.com/brand_creative/homepage2022/14-Dec3/gifcyb_w_agnetha.jpg"
                  alt=""
                />
                <h2>
                  Most wanted:limited-edition Barbour X J.Crew Agnetha jacket
                </h2>
                <Link to="">Get a closer look</Link>
              </div>
              <div>
                <img
                  src="https://www.jcrew.com/brand_creative/homepage2022/12-Dec/2022dec_1108_hp_w_img9.jpg"
                  alt=""
                />
                <h2>The edit:tartan time</h2>
                <Link to="">Shop the festive roundup</Link>
              </div>
              <div>
                <img
                  src="https://www.jcrew.com/brand_creative/homepage2022/11-Nov/2022nov_1025_hp_w_img10.jpg"
                  alt=""
                />
                <h2>Olympia's picks</h2>
                <Link to="">Shop her December edit</Link>
              </div>
              <div>
                <img
                  src="https://www.jcrew.com/brand_creative/homepage2022/12-Dec/2022dec_1108_hp_w_img11.jpg"
                  alt=""
                />
                <h2>Design Try-on:the Holiday Collection</h2>
                <Link to="">Shop the video</Link>
              </div>
            </div>
          </div>
        </div>

        {/* ----------------------- */}

        <div className="j-love-section">
          <div>
            <h2 className="Love">You'll Also Love</h2>
          </div>
          <div className="j-love-section-main">
            <div>
              <img
                src="https://www.jcrew.com/s7-img-facade/BM543_BK0001?wid=376"
                alt=""
              />{" "}
            </div>
            <div>
              <img
                src="https://www.jcrew.com/s7-img-facade/BA538_BK0001_m?wid=376"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://www.jcrew.com/s7-img-facade/BB984_BR6887?wid=376"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://www.jcrew.com/s7-img-facade/AU763_WX0651?wid=376"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://www.jcrew.com/s7-img-facade/AZ516_EE0404_m?wid=376"
                alt=""
              />
            </div>
          </div>
        </div>

{/* -------------------------------------------------Carousel----------------------------------- */}

<div>
  <Slider/>
</div>

      </div>
    </>
  );
}

export default Landing;
{
  /* <Flex
            p={4}
            alignItems="center"
            justifyContent={'space-between'}
            roundedBottom={'sm'}
            borderLeft={'1px'}
            cursor="pointer"
            onClick={() => setLiked(!liked)}>
            {liked ? (
              <BsHeartFill fill="red" fontSize={'24px'} />
            ) : (
              <BsHeart fontSize={'24px'} />
            )}
          </Flex> */
}
