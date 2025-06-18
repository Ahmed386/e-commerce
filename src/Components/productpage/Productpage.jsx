import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import Card from "react-bootstrap/Card";
import { IoEyeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { BsCartPlus } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import Loader from './../loading/Loader';


const Productpage = () => {






  const [allproducts, setAllProducts] = useState() 
  const navigate = useNavigate();


  async function getAllProducta() {
    let { data } = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/products`
    );

    let dataInner = data.data

    setAllProducts(dataInner);

    console.log(dataInner);

  }

  useEffect(() => {
    getAllProducta();

  
    
  }, [])
  






  if (!allproducts) return <Loader />;



  return (
    <>
      <div>
        <div className="brandss">
          <h1 className="text-center mb-4">All Products</h1>

          <div className="container">
            <div className="row">
              {allproducts?.map((product, index) => (
                <div
                  className="col-lg-3 col-md-6 col-sm-12 p-2 mb-2"
                  key={index}
                >
                  {/* <img src={product.imageCover} alt="" className="w-100" /> */}

                  <Card style={{ width: "15rem" }}>
                    <div className="position-relative overflow-hidden layerwrapper ">
                      <Card.Img
                        variant="top"
                        src={product.imageCover}
                        className="imglayer  "
                      />
                      <div className="position-absolute shad d-flex justify-content-end  p-1 ">
                        <div className="p-3 m-1 layericons text-white h-50 rounded">
                          <div>
                            <IoEyeOutline
                              className=" fs-3 mb-1"
                              onClick={() => navigate(`/showproduct/${product.id}`)}
                            />
                          </div>
                          <div>
                            <CiHeart className=" fs-3 my-2" />
                          </div>
                          <div>
                            <BsCartPlus className=" fs-3 my-2" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <Card.Body>
                      <Card.Title className="title-truncate">
                        {product.title}
                      </Card.Title>
                      <Card.Text>{product.price}</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Productpage