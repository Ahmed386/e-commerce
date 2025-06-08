import React from 'react'
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Card from "react-bootstrap/Card";
import { IoEyeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { BsCartPlus } from "react-icons/bs";


const Ourproducts = () => {
  return (
    <>
      <div className="ourproduct p-5">
        <div className="container">
          <div className="row mb-4">
            <div className="col-12">
              <div className="OurproductsHeadline text-center">
                <h1 className="mb-3">Our Products</h1>
                <p className="text-muted">
                  This is the most highly requested product to date We are
                  excited and proud to announce the launch of our premier line!.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <Tabs
              defaultActiveKey="profile"
              id="fill-tab-example"
              className="mb-5"
              fill
            >
              <Tab eventKey="Men" title="Men">
                <div className="container">
                  <div className="row ">
                    {productdata.map((pro, index) => (
                      <div
                        className="  col-sm-12 col-md-6 col-lg-3 mb-4  "
                        key={index}
                      >
                        <Card style={{ width: "15rem" }}>
                          <div className="position-relative overflow-hidden layerwrapper">
                            <Card.Img
                              variant="top"
                              src={pro.img}
                              className="imglayer "
                            />
                            <div className="position-absolute shad d-flex justify-content-end  p-1 ">
                              <div className="p-3 m-1 layericons text-white h-50 rounded">
                                <div>
                                  <IoEyeOutline className=" fs-3 mb-1" />
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
                            <Card.Title>{pro.description}</Card.Title>
                            <Card.Text>{pro.price}</Card.Text>
                          </Card.Body>
                        </Card>
                      </div>
                    ))}
                  </div>
                </div>
              </Tab>
              <Tab eventKey="Women" title="Women">
                <div className="container">
                  <div className="row">
                    {prowomen.map((prowomen, index) => (
                      <div
                        className="col-lg-3 col-md-6 col-sm-12 mb-3"
                        key={index}
                      >
                        <Card style={{ width: "15rem" }}>
                          <div className="">
                            <Card.Img
                              variant="top"
                              src={prowomen.img}
                              className="imglayer "
                            />
                          </div>
                          <Card.Body>
                            <Card.Title>{prowomen.description}</Card.Title>
                            <Card.Text>{prowomen.price}</Card.Text>
                          </Card.Body>
                        </Card>
                      </div>
                    ))}
                  </div>
                </div>
              </Tab>
              <Tab eventKey="longer-tab" title="Electronics">
                <div className="container">
                  <div className="row">
                    {Electronics.map((elec, index) => (
                      <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                        <Card style={{ width: "15rem" }}>
                          <div className="">
                            <Card.Img
                              variant="top"
                              src={elec.img}
                              className="imglayer "
                            />
                          </div>
                          <Card.Body>
                            <Card.Title>{elec.description}</Card.Title>
                            <Card.Text>{elec.price}</Card.Text>
                          </Card.Body>
                        </Card>
                      </div>
                    ))}
                  </div>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
}



const productdata = [
  {
    img: "/products/New folder/1680395631938-cover.jpeg",
    description: "Shoes",
    oldprice: "$744",
    price: "Price: $379",
  },

  {
    img: "/products/New folder/1680396038304-cover.jpeg",
    description: "Sooks",
    oldprice: "$744",
    price: "Price: $379",
  },

  {
    img: "/products/New folder/1680399661234-cover.jpeg",
    description: "Logo T-Shirt Green",
    oldprice: "$744",
    price: "Price: $379",
  },

  {
    img: "/products/New folder/1680399913757-cover.jpeg",
    description: "Grey Shoes",
    oldprice: "$744",
    price: "Price: $379",
  },

  {
    img: "/products/New folder/1680400120400-cover.jpeg",
    description: "Black Shoes",
    oldprice: "$744",
    price: "Price: $379",
  },

  {
    img: "/products/New folder/1680395631938-cover.jpeg",
    description: "Black shoes",
    oldprice: "$744",
    price: "Price: $379",
  },

  {
    img: "/products/New folder/1680399913757-cover.jpeg",
    description: "Grey shoes",
    oldprice: "$744",
    price: "Price: $379",
  },
  {
    img: "/products/New folder/1680396038304-cover.jpeg",
    description: "Sooks",
    oldprice: "$744",
    price: "Price: $379",
  },
];

const prowomen = [
  {
    img: "/products/women/1680403156501-cover.jpeg",
    description: "Woman Shawl",
    price: "$139",
  },
  {
    img: "/products/women/1680403266739-cover.jpeg",
    description: "Woman Shawl",
    price: "$139",
  },
  {
    img: "/products/women/1680403397402-cover.jpeg",
    description: "Woman Shawl",
    price: "$139",
  },
  {
    img: "/products/women/1680403156501-cover.jpeg",
    description: "Woman Shawl",
    price: "$139",
  },
  {
    img: "/products/women/1680403266739-cover.jpeg",
    description: "Woman Shawl",
    price: "$139",
  },
  {
    img: "/products/women/1680403156501-cover.jpeg",
    description: "Woman Shawl",
    price: "$139",
  },
  {
    img: "/products/women/1680403397402-cover.jpeg",
    description: "Woman Shawl",
    price: "$139",
  },
  {
    img: "/products/women/1680403156501-cover.jpeg",
    description: "Woman Shawl",
    price: "$139",
  },
];


const Electronics = [
  {
    img: "/products/electronics/1678302803089-cover.jpeg",
    description: "Woman Shawl",
    price: "$139",
  },
  {
    img: "/products/electronics/1678303324588-cover.jpeg",
    description: "Woman Shawl",
    price: "$139",
  },
  {
    img: "/products/electronics/1678303526206-cover.jpeg",
    description: "Woman Shawl",
    price: "$139",
  },
  {
    img: "/products/electronics/1678304313006-cover.jpeg",
    description: "Woman Shawl",
    price: "$139",
  },
  {
    img: "/products/electronics/1678304764905-cover.jpeg",
    description: "Woman Shawl",
    price: "$139",
  },
  {
    img: "/products/electronics/1678305677165-cover.jpeg",
    description: "Woman Shawl",
    price: "$139",
  },
  {
    img: "/products/electronics/1678302803089-cover.jpeg",
    description: "Woman Shawl",
    price: "$139",
  },
  {
    img: "/products/electronics/1678303324588-cover.jpeg",
    description: "Woman Shawl",
    price: "$139",
  },
];
export default Ourproducts