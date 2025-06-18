import React from 'react'

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Card from "react-bootstrap/Card";
import { IoEyeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { BsCartPlus } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Tabchild = ({ product, type }) => {


    // console.log(type);

    
  const navigate = useNavigate();

  const filteredProducts = product
    ? product.filter( pro => pro.category.name === type)
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
                      <BsCartPlus className=" fs-3 my-2" />
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
};

export default Tabchild