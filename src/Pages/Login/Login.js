import React from "react";

import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { useForm } from "react-hook-form";
import "./Login.css";
import LogoWhite from "../../Assets/Svg/LogoWhite.svg";
import { Link } from "react-router-dom";

const Login = () => {
  // const { register, handleSubmit } = useForm();
  const validate = (values) => {
    const errors = {};

    // if (!values.email) {
    //   errors.email = "Required";
    // } else if (values.email.length < 4) {
    //   errors.email = "Must be 5 characters or more";
    // }
    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be 8 characters or more";
    } else if (values.password === "12345678") {
      errors.password = "Password must not be 12345678!!!";
    }

    return errors;
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      toast.success(JSON.stringify(values, null, 2), {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    },
  });

  return (
    <div className="loginPage">
      <Link className="header flex" to="/">
        <img src={LogoWhite} alt="" />
      </Link>
      <div className="login flex">
        <div className="formHead flex">
          <h1>Login to your account</h1>
          <p>Securely login to your PiggyVest</p>
        </div>
        <form className="flex" onSubmit={formik.handleSubmit}>
          <div className="formGroup flex">
            <label className="label" htmlFor="email">
              Email or Phone Number
            </label>
            <input
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
              className="input"
              type="email"
              name="email"
              required
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
            {/* <small className="textDanger">Email is Required</small> */}
          </div>
          <div className="formGroup flex">
            <label className="label" htmlFor="password">
              Password
            </label>
            <input
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
              className="input"
              type="password"
              name="password"
              required
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="error">{formik.errors.password}</div>
            ) : null}
          </div>

          <button className="button" type="submit">
            LOG IN
          </button>
        </form>
      </div>

      <Link to="/signup" className="footLink">
        Don't have an account? Register
      </Link>
      <Link className="footLink forget">Forgot Password?</Link>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Login;
