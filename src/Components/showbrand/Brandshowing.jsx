import axios from 'axios'
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { motion } from "framer-motion";

const Brandshowing = () => {


  // async function getSpecificBrand() {
  //     let { data } = await axios.get(
  //       `https://ecommerce.routemisr.com/api/v1/brands/64089ceb24b25627a2531596`
  //     );

  //     let res = data.data

  //     console.log(res);
      
  // }

const [specificBrand , setSpecificBrand] = useState(null)
let {id} = useParams()

async function getSpecificBrand() {

    let { data } = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/brands/${id}`
    );

    
    let brandData = data.data

    // console.log(brandData);

    setSpecificBrand(brandData);


}


useEffect(() => {
    getSpecificBrand();

    

}, [id])

console.log(specificBrand);

return (
  <>
    <div>
      <div className="container bandon d-flex align-items-center">
        <div className="row">
          <div className="col-lg-6 col-md-12 p-5">
            <img src={specificBrand?.image} alt="" className="w-50 rounded" />
          </div>
          <motion.div
            className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center flex-column"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay:  0.3 }}
            viewport={{ once: true }}
          >
            <p className="fs-5">
              Trusted Brands. Quality Guaranteed. Explore our selection of
              top-rated brands known for innovation, reliability, and style.
            </p>

            <h1 className="mt-2 brandname">{specificBrand?.name}</h1>
          </motion.div>
        </div>
      </div>
    </div>
  </>
);
}

export default Brandshowing