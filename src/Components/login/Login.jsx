import axios from "axios";
import Joi from "joi";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {
  // *******************************

  // force redirect el user using  => useNavigate() : routing method


  // const navigate = useNavigate()

  //*********************** */

  const [user, setUser] = useState({
    
    email: "",
    password: "",
    
  });

  const [joierrors, setJoiErrors] = useState(null);

  // const [apiRegisterMessage, setApiRegisterMessage] = useState("");

  function getUserInputs(e) {
    let inputValue = e.target.value;

    let newUser = { ...user };

    let idString = e.target.id;

    newUser[idString] = inputValue;

    console.log(newUser);

    setUser(newUser);
  }

  function submitUser(e) {
    e.preventDefault();

    const validationSchema = Joi.object({

      email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "eg"] } })
        .required(),

      password: Joi.string()
        .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
        .required()
        .min(5),

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
        {joierrors == null
          ? ""
          : joierrors.map((err, idex) => (
              <div className="alert alert-danger">{err.message}</div>
            ))}

        {/* {apiRegisterMessage.length == 0 ? (
          ""
        ) : (
          <div className="alert alert-danger"> {apiRegisterMessage} </div>
        )} */}
        <form onSubmit={submitUser}>
          {/* <h3 className="mb-4 text-center">Login </h3> */}

         

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


          <div className="text-center">
            <button className="btn btn-danger  bott ">Login</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login