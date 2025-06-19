

import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Register = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Too short")
      .max(30, "Too long")
      .required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
        "Must contain at least 6 characters, one letter and one number"
      )
      .required("Password is required"),
    rePassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Please confirm your password"),
    phone: Yup.string()
      .matches(/^01[0125][0-9]{8}$/, "Enter a valid Egyptian phone number")
      .required("Phone is required"),
  });

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      let res = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/auth/signup`,
        values
      );
      console.log(res);

      if (res.data.message === "success") {
        navigate("/login");
      } else {
        setErrors({ api: res.data.message });
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        setErrors({ api: error.response.data.message });
      } else {
        setErrors({ api: "An unexpected error occurred." });
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <div className="w-50 m-auto py-5">
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            rePassword: "",
            phone: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, isSubmitting }) => (
            <Form>
              <h3 className="mb-4">Registration Form</h3>

              {errors.api && <div className="alert alert-danger">{errors.api}</div>}

              <label htmlFor="name" className="fs-5 mb-1">Name</label>
              <Field
                id="name"
                name="name"
                type="text"
                className="form-control mb-3"
                placeholder="Enter your name"
              />
              <ErrorMessage name="name" component="div" className="text-danger" />

              <label htmlFor="email" className="fs-5 mb-1">E-mail</label>
              <Field
                id="email"
                name="email"
                type="email"
                className="form-control mb-3"
                placeholder="e.x : ******@gmail.com"
              />
              <ErrorMessage name="email" component="div" className="text-danger" />

              <label htmlFor="password" className="fs-5 mb-1">Password</label>
              <Field
                id="password"
                name="password"
                type="password"
                className="form-control mb-3"
                placeholder="password"
              />
              <ErrorMessage name="password" component="div" className="text-danger" />

              <label htmlFor="rePassword" className="fs-5 mb-1">Re*Password</label>
              <Field
                id="rePassword"
                name="rePassword"
                type="password"
                className="form-control mb-3"
                placeholder="Enter your password again"
              />
              <ErrorMessage name="rePassword" component="div" className="text-danger" />

              <label htmlFor="phone" className="fs-5 mb-1">Phone Number</label>
              <Field
                id="phone"
                name="phone"
                type="text"
                className="form-control mb-3"
                placeholder="Enter your phone number"
              />
              <ErrorMessage name="phone" component="div" className="text-danger" />

              <div className="text-center">
                <button type="submit" className="btn btn-danger bott" disabled={isSubmitting}>
                  {isSubmitting ? "Registering..." : "Register"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Register;
