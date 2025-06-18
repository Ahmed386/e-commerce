import React from 'react'
import axios from "axios";
import  { useState } from "react";
import { useEffect } from 'react';
import Loader from './../loading/Loader';
import { useNavigate } from 'react-router-dom';


const Brandpage = () => {
  const [brandsimage, setAllBrandsimage] = useState();

  const navigate = useNavigate()

  async function getAllBrands() {
    let { data } = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/brands`
    );

    let images = data.data;

    console.log(images[0]._id);

    setAllBrandsimage(images);
  }

  //curl --location 'https://ecommerce.routemisr.com/api/v1/brands/64089ceb24b25627a2531596'





  useEffect(() => {
    getAllBrands();

  }, []);

  if (!brandsimage) return <Loader />;

  return (
    <>
      <div>
        <div className="brandss ">
          <h1 className="text-center">All Brands</h1>
        </div>

        <div className="container p-5">
          <div className="row">
            {brandsimage?.map((ban, index) => (
              <div
                className="col-lg-3 col-md-6 col-sm-12 mb-4"
                key={index}
                onClick={() => {
                  navigate(`/brandshow/${ban._id}`);
                  
                }}
              >
                <div className="brandscal text-center border rounded ">
                  <img
                    src={ban.image}
                    alt=""
                    className="w-50 p-1 rounded-pill"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}


const data = [
  {
    img: "/brands/canon.png",
  },

  {
    img: "/brands/del.png",
  },

  {
    img: "/brands/infin.png",
  },

  {
    img: "/brands/infin.png",
  },

  {
    img: "/brands/len.png",
  },
  {
    img: "/brands/son.png",
  },
  {
    img: "/brands/son.png",
  },
  {
    img: "/brands/son.png",
  },
  {
    img: "/brands/son.png",
  },
  {
    img: "/brands/son.png",
  },
  {
    img: "/brands/son.png",
  },
  {
    img: "/brands/son.png",
  },
  {
    img: "/brands/son.png",
  },
  {
    img: "/brands/son.png",
  },
  {
    img: "/brands/son.png",
  },
  {
    img: "/brands/son.png",
  },
  {
    img: "/brands/son.png",
  },

  {
    img: "/brands/len.png",
  },
  {
    img: "/brands/len.png",
  },
  {
    img: "/brands/len.png",
  },
  {
    img: "/brands/len.png",
  },
  {
    img: "/brands/len.png",
  },
  {
    img: "/brands/len.png",
  },
  {
    img: "/brands/infin.png",
  },
];

export default Brandpage