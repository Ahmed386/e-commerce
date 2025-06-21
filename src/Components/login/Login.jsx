
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Login = () => {
  const navigate = useNavigate();


  window.dispatchEvent(new Event("storage"));

  // Validation schema using Yup (like Joi)
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .matches(/^[a-zA-Z0-9]{3,30}$/, "Password must be alphanumeric")
      .min(5, "Password must be at least 5 characters")
      .required("Password is required"),
  });

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const res = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/signin",
        values
      );

      if (res.data.message === "success") {
        localStorage.setItem("userToken", res.data.token);

        navigate("/home");

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
    <div className="w-50 m-auto py-5">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors }) => (
          <Form>
            {errors.api && (
              <div className="alert alert-danger">{errors.api}</div>
            )}

            <label htmlFor="email" className="fs-5 mb-1">
              E-mail
            </label>
            <Field
              id="email"
              type="email"
              name="email"
              className="form-control mb-3"
              placeholder="e.x : ******@gmail.com"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="alert alert-danger"
            />

            <label htmlFor="password" className="fs-5 mb-1">
              Password
            </label>
            <Field
              id="password"
              type="password"
              name="password"
              className="form-control mb-3"
              placeholder="password"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="alert alert-danger"
            />

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-danger bott"
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
