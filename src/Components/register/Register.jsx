import axios from "axios";
import Joi from "joi";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  // *******************************

  // force redirect el user using  => useNavigate() : routing method


  // const navigate = useNavigate()

  //*********************** */

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    rePassword:"",
    phone: "",
  });

  const [joierrors, setJoiErrors] = useState(null);

  const [apiRegisterMessage, setApiRegisterMessage] = useState("");

  function getUserInputs(e) {


    setJoiErrors(null)

    let inputValue = e.target.value;

    let newUser = { ...user };

    let idString = e.target.id;

    newUser[idString] = inputValue;

    console.log(newUser);

    setUser(newUser);
  }

  function submitUser(e) {
    e.preventDefault();

    // ahmed();


    const validationSchema = Joi.object({
      name: Joi.string().alphanum().min(3).max(30).required(),

      email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "eg"] } })
        .required(),

      password: Joi.string()
        .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
        .required()
        .min(5),

      rePassword: Joi.string()
        .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
        .required()
        .min(5),

      phone: Joi.number(),
    });

    let joiResponse = validationSchema.validate(user, { abortEarly: false });

    if (joiResponse.error == undefined) {
      //dataValid
      //send him to login page
      // fel login h3rd el api
    } else {
      let joiErrorList = joiResponse.error.details;
      console.log(joiErrorList);

      setJoiErrors(joiErrorList);


    }
  }

  

  function getSpecificError(key) {
    if (joierrors != null ){



      for (let i = 0; i < joierrors.length; i++) {
       
        if (joierrors[i].context.key == key) {

          return joierrors[i].message
        }


        

      }

      return ''
    }
  }


  // async function ahmed(){
  //   let res = await axios.post(
  //     `https://ecommerce.routemisr.com/api/v1/auth/signup`,
  //     user
  //   );

  //   console.log(res);
    
  // }


  




  //  async function senUser() {
  //  let axiosResponse = await axios.post('apiLink' , user)

  //  console.log(axiosResponse.data);
  //****************************** */

  //  if (axiosResponse.data.message == "success") {
  //    //send him to homePage
  // force redirect el user using  => useNavigate() : routing method

  // navigate('') : takes param => path that you want to send user to 

  // navigate( '/home' )

  //  } else {
  //    // already regestered

  //    setApiRegisterMessage(axiosResponse.data.message);
  //  }
  // }

  return (
    <>
      <div className="w-50 m-auto  py-5">
        {/* {joierrors == null
          ? ""
          : joierrors.map((err, idex) => (
              <div className="alert alert-danger">{err.message}</div>
            ))} */}

        {/* {apiRegisterMessage.length == 0 ? (
          ""
        ) : (
          <div className="alert alert-danger"> {apiRegisterMessage} </div>
        )} */}
        <form onSubmit={submitUser}>
          <h3 className="mb-4">Registration Form</h3>

          <label htmlFor="name" className="fs-5 mb-1">
            Name
          </label>

          <input
            id="name"
            type="text"
            className="form-control mb-3"
            placeholder="Enter your name"
            onChange={getUserInputs}
          />

          {getSpecificError("name") ? (
            <div className="text-danger">{getSpecificError("name")}</div>
          ) : (
            ""
          )}

          <label htmlFor="email" className="fs-5 mb-1">
            E-mail
          </label>

          <input
            id="email"
            type="email"
            className="form-control mb-3"
            placeholder=" e.x : ******@gmail.com"
            onChange={getUserInputs}
          />

          {getSpecificError("email") ? (
            <div className="text-danger">{getSpecificError("email")}</div>
          ) : (
            ""
          )}
          <label htmlFor="password" className="fs-5 mb-1">
            Password
          </label>

          <input
            id="password"
            type="password"
            className="form-control mb-3"
            placeholder="password"
            onChange={getUserInputs}
          />

          {getSpecificError("password") ? (
            <div className="text-danger">
              password must be from 6 to 15 character and use * or #{" "}
            </div>
          ) : (
            ""
          )}

          <label htmlFor="rePassword" className="fs-5 mb-1">
            Re*Password
          </label>

          <input
            id="rePassword"
            type="Password"
            className="form-control mb-3"
            placeholder="Enter your password again"
            onChange={getUserInputs}
          />

          {getSpecificError("rePassword") ? (
            <div className="text-danger">
              password must be from 6 to 15 character and use * or #{" "}
            </div>
          ) : (
            ""
          )}
          <label htmlFor="phone" className="fs-5 mb-1">
            Phone Number
          </label>

          <input
            id="phone"
            type="phone"
            className="form-control mb-3"
            placeholder="Enter your phone number"
            onChange={getUserInputs}
          />

          {getSpecificError("phone") ? (
            <div className="text-danger">{getSpecificError("phone")}</div>
          ) : (
            ""
          )}

          <div className="text-center">
            <button className="btn btn-danger  bott ">Register</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register