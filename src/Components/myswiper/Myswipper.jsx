// MySwiper.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination,  } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";

const MySwiper = () => {
  return (
    <div className="container-fluid m-0 p-0  ">
      <div className="m-0 p-0 ">
        {/* <h2 className="text-center mb-4">Featured Products</h2> */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          // navigation={true}
          className="mySwiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="position-relative">
                <img
                  src={slide.image}
                  className="d-block w-100 "
                  alt={`Slide ${index + 1}`}
                  style={{ objectFit: "cover", height: "600px" }}
                />
                <div
                  className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-white"
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                    borderRadius: "0.5rem",
                  }}
                >
                  <h2 className="fw-bold">{slide.heading}</h2>
                  <p className="fs-5">{slide.subheading}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MySwiper;




const slides = [
  {
    image: "/images/money-card-business-credit-card-50987.webp",
    heading: "Top Rated Collection",
    subheading: "Hurry up before the stock runs out",
  },
  {
    image: "/images/pexels-photo-230544.webp",
    heading: "New Arrivals",
    subheading: "Fresh styles just dropped",
  },
  {
    image: "/images/pexels-photo-3944405.webp",
    heading: "Limited Time Offer",
    subheading: "Discover our most loved products!",
  },
  {
    image: "/images/pexels-photo-5849594-4.webp",
    heading: "Shop the Look",
    subheading: "Trendy picks curated for you",
  },
];

