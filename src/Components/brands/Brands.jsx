


import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import axios from "axios";

const Brands = () => {


  const [allbrands , setAllbrands] = useState()

  async function getAllBrands() {
    let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/brands`);


    setAllbrands(data.data);
    
  }

  useEffect(()=>{
    getAllBrands();
  },[])

  
  






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
            {allbrands?.length > 4 && (
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
                {allbrands.map((brand, index) => (
                  <SwiperSlide key={index}>
                    <div className="text-center">
                      <img
                        src={brand.image}
                        alt={`brand-${index}`}
                        className="img-fluid rounded"
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
            )}
          </div>
        </div>
      </div>
    </>
  );
};



export default Brands;
