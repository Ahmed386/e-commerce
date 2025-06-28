// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination,  } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/pagination";

// const MySwiper = () => {




//   return (
//     <div className="container-fluid m-0 p-0  ">
//       <div className="m-0 p-0 ">
//         <Swiper
//           modules={[Autoplay, Pagination]}
//           spaceBetween={30}
//           loop={true}
//           centeredSlides={true}
//           autoplay={{
//             delay: 4000,
//             disableOnInteraction: false,
//           }}
//           pagination={{ clickable: true }}
//           // navigation={true}
//           className="mySwiper"
//         >
//           {slides.map((slide, index) => (
//             <SwiperSlide key={index}>
//               <div className="position-relative">
//                 <img
//                   src={slide.image}
//                   className="d-block w-100 "
//                   alt={`Slide ${index + 1}`}
//                   style={{ objectFit: "cover", height: "600px" }}
//                 />
//                 <div
//                   className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-white"
//                   style={{
//                     backgroundColor: "rgba(0, 0, 0, 0.4)",
//                     borderRadius: "0.5rem",
//                   }}
//                 >
//                   <h2 className="fw-bold">{slide.heading}</h2>
//                   <p className="fs-5">{slide.subheading}</p>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default MySwiper;




const slides = [
  {
    image: "/images/money-card-business-credit-card-50987.webp",
    heading: "Top Rated Collection",
    subheading: "Hurry up before the stock runs out",
    thumtitle: "card treatment",
  },
  {
    image: "/images/pexels-photo-230544.webp",
    heading: "New Arrivals",
    subheading: "Fresh styles just dropped",
    thumtitle: "order now",
  },
  {
    image: "/images/pexels-photo-3944405.webp",
    heading: "Limited Time Offer",
    subheading: "Discover our most loved products!",
    thumtitle: "offers",
  },
  {
    image: "/images/pexels-photo-5849594-4.webp",
    heading: "Shop the Look",
    subheading: "Trendy picks curated for you",
    thumtitle: "fawry transaction",
  },
];




import React, { useEffect, useRef, useState } from "react";
import "./carousel.css";

const timeRunning = 3000;
const timeAutoNext = 6000;

const MySwiper = () => {
  const [mainSlides, setMainSlides] = useState(slides);
  const [thumbSlides, setThumbSlides] = useState(slides);

  const [direction, setDirection] = useState(""); // "next" or "prev"
  const timeoutRef = useRef(null);
  const autoNextRef = useRef(null);

  const carouselRef = useRef(null);

  const handleSlide = (type) => {
    setDirection(type);

    if (type === "next") {
      setMainSlides((prev) => [...prev.slice(1), prev[0]]);
      setThumbSlides((prev) => [...prev.slice(1), prev[0]]);
    } else {
      setMainSlides((prev) => [prev[prev.length - 1], ...prev.slice(0, -1)]);
      setThumbSlides((prev) => [prev[prev.length - 1], ...prev.slice(0, -1)]);
    }

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setDirection("");
    }, timeRunning);

    clearTimeout(autoNextRef.current);
    autoNextRef.current = setTimeout(() => handleSlide("next"), timeAutoNext);
  };

  useEffect(() => {
    autoNextRef.current = setTimeout(() => handleSlide("next"), timeAutoNext);
    return () => {
      clearTimeout(timeoutRef.current);
      clearTimeout(autoNextRef.current);
    };
  }, []);

  return (
    <div className={`carousel ${direction}`} ref={carouselRef}>
      {/* Main Slides */}

      <div className="list">
        {mainSlides.map((slide, idx) => (
          <div className="item" key={slide.image + idx}>
            <img src={slide.image} alt="" />
            <div className="content">
              <div className="title">{slide.heading}</div>
              <div className="des">{slide.subheading}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Thumbnails */}
      <div className="thumbnail">
        {thumbSlides.map((slide, idx) => (
          <div className="item" key={idx}>
            <img src={slide.image} alt="" />
            <div className="content">
              <div className="title">{slide.thumtitle} </div>
              {/* <div className="des"></div> */}
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <div className="arrows">
        <button id="prev" onClick={() => handleSlide("prev")}>
          &lt;
        </button>
        <button id="next" onClick={() => handleSlide("next")}>
          &gt;
        </button>
      </div>

      {/* Time Bar */}
      <div className="time"></div>
    </div>
  );
};

export default MySwiper;















































// import React, { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// // import { Autoplay, Pagination, Thumbs } from "swiper/modules";
// import { Autoplay, Pagination, Thumbs, EffectFade } from "swiper/modules";
// import "swiper/css/effect-fade";


// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/thumbs";

// const slides = [
//   {
//     image: "/images/money-card-business-credit-card-50987.webp",
//     heading: "Top Rated Collection",
//     subheading: "Hurry up before the stock runs out",
//   },
//   {
//     image: "/images/pexels-photo-230544.webp",
//     heading: "New Arrivals",
//     subheading: "Fresh styles just dropped",
//   },
//   {
//     image: "/images/pexels-photo-3944405.webp",
//     heading: "Limited Time Offer",
//     subheading: "Discover our most loved products!",
//   },
//   {
//     image: "/images/pexels-photo-5849594-4.webp",
//     heading: "Shop the Look",
//     subheading: "Trendy picks curated for you",
//   },
// ];

// const MySwiper = () => {
//   const [thumbsSwiper, setThumbsSwiper] = useState(null);

//   return (
//     <div style={{ position: "relative" }}>
//       {/* Main Slider */}
//       <Swiper
//         modules={[Autoplay, Pagination, Thumbs, EffectFade]}
//         effect="fade"
//         fadeEffect={{ crossFade: true }}
//         thumbs={{ swiper: thumbsSwiper }}
//         loop={true}
//         autoplay={{
//           delay: 4000,
//           disableOnInteraction: false,
//         }}
//         // pagination={{ clickable: true }}
//         className="mainSwiper"
//         style={{ height: "90vh" }}
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={index}>
//             <div
//               className="d-flex justify-content-center align-items-center"
//               style={{
//                 backgroundImage: `url(${slide.image})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 height: "100vh",
//                 width: "100%",
//               }}
//             >
//               <div
//                 className="text-white text-center p-4"
//                 style={{
//                   backgroundColor: "rgba(0, 0, 0, 0.5)",
//                   borderRadius: "0.5rem",
//                 }}
//               >
//                 <h2 className="fw-bold">{slide.heading}</h2>
//                 <p className="fs-5">{slide.subheading}</p>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Thumbnails */}
//       <div
//         className="w-100 px-4 pb-3"
//         style={{
//           position: "absolute",
//           bottom: 0,
//           left: 0,
//           zIndex: 100,
//         }}
//       >
//         <Swiper
//           onSwiper={setThumbsSwiper}
//           modules={[Thumbs]}
//           spaceBetween={10}
//           slidesPerView={4}
//           watchSlidesProgress
//           className="thumbSwiper"
//         >
//           {slides.map((slide, index) => (
//             <SwiperSlide key={`thumb-${index}`}>
//               <img
//                 src={slide.image}
//                 alt={`Thumb ${index}`}
//                 style={{
//                   height: "80px",
//                   // objectFit: "cover",
//                   borderRadius: "5px",
//                   width: "80%",
//                   cursor: "pointer",
//                 }}
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default MySwiper;
