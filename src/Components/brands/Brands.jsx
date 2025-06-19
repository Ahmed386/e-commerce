// import axios from 'axios';
// import React, { useState } from 'react'
// import Slider from "react-slick";
// import { useEffect } from 'react';




  

// const Brands = () => {


  

  

//     const settings = {
      
//       infinite: true,
//       slidesToShow: 3,
//       slidesToScroll: 1,
//       autoplay: true,
//       speed: 2000,
//       autoplaySpeed: 2000,
//       cssEase: "linear",
//     };


//   return (
//     <>
//       <div className="brand p-5 ourproduct">
//         <div className="container">
//           <div className="row">
//             <div className="col-12 text-center">
//               <h2 className="mb-3">Shop By Brands</h2>
//               <p className="text-muted">
//                 Select Your Favorite Brands And Purchase
//               </p>
//             </div>
//           </div>

//           <div className="row">
//             <div className="row mt-4">
//               <Slider {...settings}>
//                 {brandsdata.map((brand, index) => (
//                   <div className="col-lg-4 ms-1" key={index}>
//                     <div>
//                       <img src={brand.img} alt="" />
//                     </div>
//                   </div>
//                 ))}
//               </Slider>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }



// const brandsdata = [
//   {
//     img: "/brands/1678285724527.png",
//   },

//   {
//     img: "/brands/1678286142113.png",
//   },

//   {
//     img: "/brands/1678286204060.png",
//   },

//   {
//     img: "/brands/1678286238428.png",
//   },
//   {
//     img: "/brands/1678286281363.png",
//   },

//   {
//     img: "/brands/1678285724527.png",
//   },
// ];

// export default Brands


import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const Brands = () => {
  return (
    <>
      <div className="brand p-5 ourproduct">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="mb-3">Shop By Brands</h2>
              <p className="text-muted">
                Select Your Favorite Brands And Purchase
              </p>
            </div>
          </div>

          <div className="row mt-4">
            <Swiper
              modules={[Autoplay]}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              spaceBetween={30}
              loop={true}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                576: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1200: {
                  slidesPerView: 4,
                },
              }}
            >
              {brandsdata.map((brand, index) => (
                <SwiperSlide key={index}>
                  <div className="text-center">
                    <img
                      src={brand.img}
                      alt={`brand-${index}`}
                      className="img-fluid"
                      style={{
                        height: "120px",
                        objectFit: "contain",
                        margin: "auto",
                      }}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

const brandsdata = [
  {
    img: "/brands/1678285724527.png",
  },
  {
    img: "/brands/1678286142113.png",
  },
  {
    img: "/brands/1678286204060.png",
  },
  {
    img: "/brands/1678286238428.png",
  },
  {
    img: "/brands/1678286281363.png",
  },
  {
    img: "/brands/1678285724527.png",
  },
];

export default Brands;
