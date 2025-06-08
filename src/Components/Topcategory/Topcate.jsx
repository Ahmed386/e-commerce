import React from 'react'
import Slider from "react-slick";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme";

const Topcategory = () => {


  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };


  
  return (
    <>
      <div className="topcategory p-5 text-center ">
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
            <Slider {...settings}>
              {data.map((d , index) => (
                <div className="col-lg-3 rounded text-center " key={index} >
                  <div className="rounded text-center  " style={{height:"200px" , objectFit:"cover"}}>
                    <img src={d.img} alt="" className="w-50 m-auto rounded h-100" />
                  </div>

                  <div>
                    <h3>{d.name}</h3>
                    <p>{d.review}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}


const data = [
  {
    name: "Mens's Fashion ",
    img: "/public/images/topcate/1681511865180shirt.jpeg",
  },

  {
    name: "Gittar",
    img: "/public/images/topcate/1681511964020لهففشق.jpeg",
  },

  {
    name: "lkmvglrkmgv",
    img: "/public/images/topcate/1681511865180shirt.jpeg",
  },

  {
    name: "dress",
    img: "/public/images/topcate/dress.jpeg",
  },
  {
    name: "Phone",
    img: "/public/images/topcate/1681511156008phone.png",
  },

  {
    name: "CoffeMachine",
    img: "/public/images/topcate/1681511392672.png",
  },
];


export default Topcategory