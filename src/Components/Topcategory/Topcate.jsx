


import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import axios from "axios";

const Topcategory = () => {

  const [getTopCategory , setGetTopCategory] = useState()

  async function getTopCategories () {
  const  {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)


    setGetTopCategory(data.data);
    
  }

  useEffect(() => {
    getTopCategories();
  }, [])
  









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
          {getTopCategory?.length > 4 && (
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
              {getTopCategory?.map((d, index) => (
                <SwiperSlide key={index}>
                  <div className="p-2 text-center mb-3">
                    <div className="d-flex justify-content-center">
                      <img
                        src={d.image}
                        alt=""
                        className="img-fluid rounded"
                        style={{
                          height: "200px",
                          objectFit: "contain",
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
          )}
        </div>
      </div>
    </div>
  );
};



export default Topcategory;
