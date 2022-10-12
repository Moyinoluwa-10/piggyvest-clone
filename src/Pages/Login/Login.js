import React from "react";

// hook
// import { useForm } from "react-hook-form";
// style
import "./Login.css";
// images
import LogoWhite from "../../Assets/Svg/LogoWhite.svg";

const Login = () => {
  // const { register, handleSubmit } = useForm();

  return (
    <div className="loginPage flex">
      <div className="container flex">
        <div className="header flex">
          <img src={LogoWhite} alt="" />
        </div>
        <div className="login flex">
          <div className="formHead">
            <h1>Login to your account</h1>
            <p>Securely login to your PiggyVest</p>
          </div>
          <form className="flex">
            <div className="formGroup flex">
              <label htmlFor="email">Email or Phone Number</label>
              <input type="email" name="email" required />
              {/* <small className="textDanger">Email is Required</small> */}
            </div>
            <div className="formGroup flex">
              <label htmlFor="password">Email or Phone Number</label>
              <input type="password" name="password" required />
              {/* <small className="textDanger">Email is Required</small> */}
            </div>
            <input type="submit" value="LOG IN" />
          </form>
        </div>
        <small></small><small></small>
      </div>
    </div>
  );
};

export default Login;
