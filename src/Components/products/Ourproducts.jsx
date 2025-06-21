import React, { useState ,useEffect } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Card from "react-bootstrap/Card";
import { IoEyeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { BsCartPlus } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
// import { axios } from 'axios';
// import { useState } from 'react';
import axios  from 'axios';
import Tabchild from './../Tabchild';


const Ourproducts = () => {



  const [product , setProduct] = useState()

  async function getNavproduct() {
    let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products`);

    let breef = data.data;
  setProduct(breef);

    

  }

  useEffect(() => {
    getNavproduct();
  
    
  }, [])
  


  const navigate = useNavigate()
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
              defaultActiveKey="Men's Fashion"
              id="fill-tab-example"
              className="mb-5"
              fill
            >
              <Tab eventKey="Men's Fashion" title="Men">
                <Tabchild product={product} type="Men's Fashion" />
              </Tab>

              <Tab eventKey="Women's Fashion" title="Women">
                <Tabchild product={product} type="Women's Fashion" />
              </Tab>

              <Tab eventKey="Electronics" title="Electronics">
                <Tabchild product={product} type="Electronics" />
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
}





export default Ourproducts