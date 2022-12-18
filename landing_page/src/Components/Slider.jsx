// import { Box } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import Carousel from "react-elastic-carousel";
import "../Style/landing.css";

const append = [
  {
    img: "https://edge.curalate.com/v1/img/zmxX3utLTtj8ieYrcZvID5uta0lKnKVO9psnspmDIJs=/w/450?typ=webp",
  },
  {
    img: "https://edge.curalate.com/v1/img/XhX9X__cn1TWp5uDSVAcycTrrPZwb5gooGc5g7pWCa4=/w/600?typ=webp",
  },
  {
    img: "https://edge.curalate.com/v1/img/_KSg3MboSML2rt-Q4i8thf9HahtLTk1B0VhvN1ot75Y=/w/450?typ=webp",
  },
  {
    img: "https://edge.curalate.com/v1/img/Zy2p5P9Pn2QvKq7O7mqKk_dUQJnMdQoXZ6wNdGVVw7s=/w/450?typ=webp",
  },
  {
    img: "https://edge.curalate.com/v1/img/3I9DDozymFfTVx6pXJQqO5er5z691M4MuK30ATmjacI=/w/450?typ=webp",
  },
  {
    img: "https://edge.curalate.com/v1/img/t71ef0Bi0yq84RVLEmACSbeYYDLu8SFqFLuLFuduiD4=/w/450?typ=webp",
  },
  {
    img: "https://edge.curalate.com/v1/img/wj7mUH6CTWbyzNan7hAErQVWJW9D0G6ZciAKE7AF-jg=/w/450?typ=webp",
  },
  {
    img: "https://edge.curalate.com/v1/img/IJa_dbscSf7ZUW088Ai9QduRBHEZgUkYwkLR1xaCzq4=/w/450?typ=webp",
  },
  {
    img: "https://edge.curalate.com/v1/img/MnsXdL03m4sXnrLhLNOaeLfgSfgEolGOP2xhybVdaOc=/w/450?typ=webp",
  },
  {
    img: "https://edge.curalate.com/v1/img/EO_5J4ugxZ9H9yabrs2WhLtnSI6GCbIrKXGIsidh8WA=/w/450?typ=webp",
  },
  {
    img: "https://edge.curalate.com/v1/img/H1OQ2Vb2D-lDOlOIeY_2uvAiZyJc7AcE8a91plF1q74=/w/450?typ=webp",
  },
  {
    img: "https://edge.curalate.com/v1/img/NJ-kMdlSDbELJcg_NZtCxXiZshpN8CmCeQJYUnzO8Lo=/w/450?typ=webp",
  },
  {
    img: "https://edge.curalate.com/v1/img/dxhVmObKU4jo9dB9-eK4IAKVjItKgHa_hgP9j764dzo=/w/450?typ=webp",
  },
];
const Slider = () => {
  const [data, setData] = useState(append);

  const breakPoints = [
    { width: 200, itemsToShow: 1, itemsToScroll: 1 },
    { width: 400, itemsToShow: 1, itemsToScroll: 1 },
    { width: 500, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3, itemsToScroll: 3 },
    {width: 1150, itemsToShow: 4, itemsToScroll: 4 },
  ];

  return (
    <div className="j-slider">
      {
        <Carousel breakPoints={breakPoints}>
          {data.map((item) => (
            <div className="d_append_data">
              {/* <p>{item}</p> */}
              <div style={{ display: "flex" }}>
                <img src={item.img} alt="" />
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </Carousel>
      }
    </div>
  );
};
export default Slider;

