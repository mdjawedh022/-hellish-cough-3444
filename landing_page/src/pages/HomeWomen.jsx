import React from 'react'
import { useState } from 'react'
import womenData from '../Data/womenData'
import "../Style/men.css"

function HomeWomen() {
    const[dataAppend,setDataAppend]=useState(womenData)
  return (
    <div className='j-men-page'>
      <div className='j-men-bannner'>
      <h1>Women Collection</h1>
      </div>
      <div className='j-filters-section'>
           <div className='j-filters-section-filters'> 
            <div>
                <select placeholder='Show Filters '>
                    <option value="">Show Filters</option>
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
                <select placeholder='Featured'>
                <option value="">Featured</option>
                    <option value="l2h">Price:Low-High</option>
                    <option value="h2l">Price:High-Low</option>
                    <option value="">Top Rated</option>
                    <option value="">New Arrival</option>
                </select>
            </div>
            </div>
           <div className='j-filter-number'>
             <div className='j-filter-pages-filter'><select>
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
                <p>of 9</p></div>|
             <div><button>view 120</button></div>
           </div>
           </div>
      {/* ------------------------------------------------- */}
      <div className='j-men-section-data-append'>
         {dataAppend.map((elem)=>(
           <div  className='j-men-section-data'>                <img src={elem.img} alt="" />
                <h4>{elem.badge}</h4>
                <h2>{elem.title}</h2>
                <div style={{display:'flex',gap:"7px"}}> <p className='j-orprice'>{elem.orPrice}</p><span>INR {elem.price}</span><span>{elem.tile__detail}</span></div>
                <p className='j-elemsection'>{elem.section}</p>

                </div>
         ))}
      </div>
    </div>
  )
}

export default HomeWomen
