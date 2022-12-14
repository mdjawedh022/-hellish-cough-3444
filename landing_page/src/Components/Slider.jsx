// import { Box } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import Carousel from "react-elastic-carousel";

const append = [
  {
    img: "https://assets.interntheory.com/creative/courses/thumbnails/finthumbnail.jpg",
    title: "R Programming Course",
   
    
  },
  {
    img: "https://assets.interntheory.com/creative/courses/thumbnails/android-app-development-kotlin-course.png",
    title: "Android App Development Using",
   
      
  },
  {
    img:"https://assets.interntheory.com/creative/courses/thumbnails/r-programming-course.png",
    title:"IT Starter Pack (4 Courses)"
  },
  {
    img: "https://assets.interntheory.com/creative/courses/thumbnails/finthumbnail.jpg",
    title: "R Programming Course",
   
    
  },
  {
    img: "https://assets.interntheory.com/creative/courses/thumbnails/android-app-development-kotlin-course.png",
    title: "Android App Development Using",
   
      
  },
  {
    img:"https://assets.interntheory.com/creative/courses/thumbnails/r-programming-course.png",
    title:"IT Starter Pack (4 Courses)"
  }
  
];
export const Slider = () => {
  const [data, setData] = useState(append);

  const breakPoints = [
    { width: 200, itemsToShow: 1, itemsToScroll: 1 },
    { width: 400, itemsToShow: 2, itemsToScroll: 2 },
    { width: 500, itemsToShow: 3, itemsToScroll: 3 },
    { width: 768, itemsToShow: 3, itemsToScroll: 3 },
  ];

  return (
    <div className="d_slid">
      <div style={{ width: "80%" ,height:"140px", margin: "auto",background:"white" }}>
        {
          <Carousel breakPoints={breakPoints}>
            {data.map((item) => (
              <div className="d_append_data">
                {/* <p>{item}</p> */}
                <div style={{display:"flex",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
                  <img src={item.img} alt="" />
                  <h3>{item.title}</h3>
                </div>
              </div>
            ))}
          </Carousel>
        }
      </div>
    </div>
  );
};
