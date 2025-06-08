import React from 'react'
import Slider from "react-slick";



  

const Brands = () => {







    const settings = {
      
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };


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

          <div className="row">
            <div className="row mt-4">
              <Slider {...settings}>
                {brandsdata.map((brand, index) => (
                  <div className="col-lg-4 ms-1" key={index}>
                    <div>
                      <img src={brand.img} alt="" />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}



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

export default Brands