import React from 'react'

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Card from "react-bootstrap/Card";
import { IoEyeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { BsCartPlus } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import axios from "axios"; 
import { toast } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css";



const Tabchild = ({ product, type }) => {
  const token = localStorage.getItem("userToken"); // ✅ Must be saved in login
  // console.log("Current token:", token); 
  const navigate = useNavigate();

  const addToCart = async (productId) => {
    try {
      const token = localStorage.getItem("userToken");

      const { data } = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/cart",
        { productId },
        {
          headers: {
            token: token, // ✅ Try this first
            // Authorization: `Bearer ${token}` // ← try this if the first doesn't work
          },
        }
      );

      toast.success("Product added to cart!", {
        position: "top-right",
        autoClose: 2000,
      });

      // navigate("/cart"); // if needed
    } catch (error) {
      toast.error("Firstly Login.. Failed to add to cart. ", {
        position: "top-right",
        autoClose: 2000,
      });

      console.error(
        "Add to cart error:",
        error.response?.data || error.message
      );
    }
  };
  
  
  
  

  const filteredProducts = product
    ? product.filter((pro) => pro.category.name === type)
    : [];

  return (
    <div className="container">
      <div className="row ">
        {filteredProducts?.map((pro, index) => (
          <div className="  col-sm-12 col-md-6 col-lg-3 mb-4  " key={index}>
            <Card style={{ width: "15rem" }}>
              <div className="position-relative overflow-hidden layerwrapper">
                <Card.Img
                  variant="top"
                  src={pro.imageCover}
                  className="imglayer "
                />
                <div className="position-absolute shad d-flex justify-content-end  p-1 ">
                  <div className="p-3 m-1 layericons text-white h-50 rounded">
                    <div>
                      <IoEyeOutline
                        className=" fs-3 mb-1"
                        onClick={() => navigate(`/showproduct/${pro.id}`)}
                      />
                    </div>
                    <div>
                      <CiHeart className=" fs-3 my-2" />
                    </div>
                    <div>
                      <BsCartPlus
                        className="fs-3 my-2"
                        onClick={() => addToCart(pro.id)}
                        
                      />
                    </div>
                  </div>
                </div>
              </div>
              <Card.Body>
                <Card.Title className="title-truncate">{pro.title}</Card.Title>
                <Card.Text>{pro.price}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};;

export default Tabchild