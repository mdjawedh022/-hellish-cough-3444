import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import womenData from "../Data/womenData";
import "../Style/men.css";
let sortData;
// let data;``
let arr = JSON.parse(localStorage.getItem("save_quick")) || [];
function HomeWomen({ searchText }) {
  const navigate = useNavigate();
  const [dataAppend, setDataAppend] = useState(womenData);

  // console.log(searchText)

  useEffect(() => {
    // console.log(searchText);
    if (searchText != "") {
      setDataAppend(womenData.filter((elem) => elem.name == searchText));
    }
    if (searchText == "") {
      setDataAppend(womenData);
    }
  }, [searchText]);

  // filter
  const Handlefilter = (e) => {
    console.log(e.target.value);
    let filterdata = e.target.value;

    if (filterdata !== "") {
      setDataAppend(womenData.filter((elem) => elem.name === filterdata));
    } else {
      setDataAppend(womenData);
    }
  };

  const hadleh2l = (e) => {
    console.log(e.target.value);
    let sortdata = e.target.value;
    console.log(dataAppend);
    if (sortdata === "h2l") {
      sortData = [...dataAppend].sort((a, b) => b.price - a.price);
    } else {
      sortData = [...dataAppend].sort((a, b) => a.price - b.price);
    }
    setDataAppend(sortData);
  };

  // ------------------
  const handlesave = (item) => {
    console.log(arr)
    arr.push(item);
    localStorage.setItem("save_quick", JSON.stringify(arr));
    navigate("/quickshop");
    alert("add cart succseful");
  };

  return (
    <div className="j-men-page">
      <div className="j-men-bannner">
        <div className="j-men-bannner-main">
          <h1>The Gift Guide</h1>
          <p>
            {" "}
            Great holiday presents are part of our heritage.Here's our take...
          </p>
          <select className="for-her-him">
            <option value="">For Her</option>
            <option value="">For Him</option>
            <option value="">For Girls</option>
            <option value="">For Boys</option>
            <option value="">For the Home</option>
          </select>
          <div className="j-best-sellers">
            <button>Best Sellers</button>
            <button>Top Rated</button>
          </div>
        </div>
      </div>
      <div className="j-filters-section">
        <div className="j-filters-section-filters">
          <div>
            <select placeholder="Show Filters" onChange={Handlefilter}>
              <option value="">Show Filters</option>
              <option value="t-shirt">T-shirts(20)</option>
              <option value="sweater">Sweaters(10)</option>
              <option value="pant">Pants(5)</option>
              <option value="shirt">Shirt(26)</option>
              <option value="top">Tops & Tnak Tops(11)</option>
              <option value="">Coats & jackets(52)</option>
              <option value="">Dresses & Jumpsuits(13)</option>
              <option value="">Denim(20)</option>
            </select>
          </div>
          <div>
            <select placeholder="Featured" onChange={hadleh2l}>
              <option value="">Featured</option>
              <option value="l2h">Price:Low-High</option>
              <option value="h2l">Price:High-Low</option>
              <option value="">Top Rated</option>
              <option value="">New Arrival</option>
            </select>
          </div>
        </div>
        <div className="j-filter-number">
          <div className="j-filter-pages-filter">
            <select>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
              <option value="">5</option>
              <option value="">6</option>
              <option value="">7</option>
              <option value="">8</option>
              <option value="">9</option>
              <option value="">10</option>
            </select>
            <p>of 9</p>
          </div>
          |
          <div>
            <button>view 120</button>
          </div>
        </div>
      </div>
      {/* ------------------------------------------------- */}
      <div className="j-men-section-data-append">
        {dataAppend.map((elem) => (
          <div
            onClick={() => handlesave(elem)}
            className="j-men-section-data"
            key={elem.id}
          >
            <img src={elem.img} alt="" />
            <h4>{elem.badge}</h4>
            <h2>{elem.title}</h2>
            <div style={{ display: "flex", gap: "7px" }}>
              {" "}
              <p className="j-orprice">{elem.orPrice}</p>
              <span>INR {elem.price}</span>
              <span>{elem.tile__detail}</span>
            </div>
            <p className="j-elemsection">{elem.section}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeWomen;
