import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import Card from "react-bootstrap/Card";
import { IoEyeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { BsCartPlus } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import Loader from './../loading/Loader';
import { toast } from "react-toastify"; // Make sure this is installed
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Productpage = () => {






  const [allproducts, setAllProducts] = useState() 
  const navigate = useNavigate();


  async function getAllProducta() {
    let { data } = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/products`
    );

    let dataInner = data.data

    setAllProducts(dataInner);

 

  }


  const token = localStorage.getItem("userToken");

  const addToCart = async (productId) => {
    try {
      const { data } = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/cart",
        { productId },
        {
          headers: {
            token: token,
          },
        }
      );

      toast.success("Product added to cart!", {
        position: "top-right",
        autoClose: 2000,
      });

      // Optional: Redirect or update cart count here
    } catch (error) {
      toast.error("Firstly login..Failed to add to cart.", {
        position: "top-right",
        autoClose: 2000,
      });
      console.error(
        "Add to cart error:",
        error.response?.data || error.message
      );
    }
  };


  useEffect(() => {
    getAllProducta();

  
    
  }, [])

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  






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
                  data-aos="flip-left"
                  data-aos-delay={index * 100}
                >
                  <Card style={{ width: "15rem" }}>
                    <div className="position-relative overflow-hidden layerwrapper ">
                      <Card.Img
                        variant="top"
                        src={product.imageCover}
                        className="imglayer"
                      />
                      <div className="position-absolute shad d-flex justify-content-end  p-1 ">
                        <div className="p-3 m-1 layericons text-white h-50 rounded">
                          <div>
                            <IoEyeOutline
                              className=" fs-3 mb-1"
                              onClick={() =>
                                navigate(`/showproduct/${product.id}`)
                              }
                            />
                          </div>
                          <div>
                            <CiHeart className=" fs-3 my-2" />
                          </div>
                          <div>
                            <BsCartPlus
                              className=" fs-3 my-2"
                              onClick={() => addToCart(product._id)}
                            />
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