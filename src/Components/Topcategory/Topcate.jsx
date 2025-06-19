// import React from 'react'
// import Slider from "react-slick";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme";

// const Topcategory = () => {


//   // const settings = {
//   //   dots: true,
//   //   infinite: true,
//   //   slidesToShow: 4,
//   //   slidesToScroll: 1,
//   //   autoplay: true,
//   //   speed: 2000,
//   //   autoplaySpeed: 2000,
//   //   cssEase: "linear",
//   // };


//   const settings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay: true,
//     speed: 2000,
//     autoplaySpeed: 2000,
//     cssEase: "linear",
//     responsive: [
//       {
//         breakpoint: 1200,
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//       {
//         breakpoint: 992,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };
  

  
//   return (
//     <>
//       <div className="topcategory p-5 text-center ">
//         <div className="container">
//           <div className="row text-center">
//             <div className="col-12">
//               <h1 className="mb-4 fw-bolder">Top Category</h1>
//               <p className="fs-4">
//                 Follow the most popular trends and get exclusive items from
//                 shopingo ecommerce.
//               </p>
//             </div>
//           </div>

//           <div className="row mt-5">
//             <Slider {...settings}>
//               {data.map((d, index) => (
//                 <div className="p-2 text-center " key={index}>
//                   <div style={{ height: "200px", overflow: "hidden" }}>
//                     <img
//                       src={d.img}
//                       alt=""
//                       className="w-75 m-auto rounded h-100"
//                       style={{ objectFit: "cover" }}
//                     />
//                   </div>

//                   <div>
//                     <h3>{d.name}</h3>
//                     <p>{d.review}</p>
//                   </div>
//                 </div>
//               ))}
//             </Slider>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


// const data = [
//   {
//     name: "Mens's Fashion ",
//     img: "/images/topcate/1681511865180shirt.jpeg",
//   },

//   {
//     name: "Gittar",
//     img: "/images/topcate/1681511964020لهففشق.jpeg",
//   },

//   {
//     name: "lkmvglrkmgv",
//     img: "/images/topcate/1681511865180shirt.jpeg",
//   },

//   {
//     name: "dress",
//     img: "/images/topcate/dress.jpeg",
//   },
//   {
//     name: "Phone",
//     img: "/images/topcate/1681511156008phone.png",
//   },

//   {
//     name: "CoffeMachine",
//     img: "/images/topcate/1681511392672.png",
//   },
// ];


// export default Topcategory


import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Topcategory = () => {
  return (
    <div className="topcategory p-5 text-center">
      <div className="container">
        <div className="row text-center">
          <div className="col-12">
            <h1 className="mb-4 fw-bolder">Top Category</h1>
            <p className="fs-4">
              Follow the most popular trends and get exclusive items from
              shopingo ecommerce.
            </p>
          </div>
        </div>

        <div className="row mt-5">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            spaceBetween={20}
            pagination={{ clickable: true }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
            }}
            loop={true}
          >
            {data.map((d, index) => (
              <SwiperSlide key={index}>
                <div className="p-2 text-center">
                  <div className="d-flex justify-content-center">
                    <img
                      src={d.img}
                      alt=""
                      className="img-fluid rounded"
                      style={{
                        height: "200px",
                        objectFit: "contain", // This shows the full image
                      }}
                    />
                  </div>

                  <div>
                    <h3 className="mt-2">{d.name}</h3>
                    <p>{d.review}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

const data = [
  {
    name: "Mens's Fashion ",
    img: "/images/topcate/1681511865180shirt.jpeg",
  },
  {
    name: "Gittar",
    img: "/images/topcate/1681511964020لهففشق.jpeg",
  },
  {
    name: "lkmvglrkmgv",
    img: "/images/topcate/1681511865180shirt.jpeg",
  },
  {
    name: "dress",
    img: "/images/topcate/dress.jpeg",
  },
  {
    name: "Phone",
    img: "/images/topcate/1681511156008phone.png",
  },
  {
    name: "CoffeMachine",
    img: "/images/topcate/1681511392672.png",
  },
];

export default Topcategory;
