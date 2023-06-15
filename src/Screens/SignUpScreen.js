import React, { useState, useEffect } from "react";
import "./Styles/SignUpScreen.css";
import { NavLink, useNavigate } from "react-router-dom";

export default function SignUpScreen() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [token, setToken] = useState();
  // console.log(username,password);
  // const navigate = useNavigate();
  console.log(password, email);

  const formsubmitfunc = (e) => {
    e.preventDefault();
    console.log("Hii");

    const loginData = {
      email: email,
      password: password,
    };
    if (email && password) {
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
    }
  };

  return (
    <>
      <div className="loginContainer">
        <div className="login_form_container">
          <div className="login_form">
            <div className="logoBox">
              <h2>
                bit<span className="logoSpan">cot</span>
              </h2>
            </div>
            <p className="signUpTitle">
              Don't have an account yet?{" "}
              <span className="logoSpan">Sign Up</span>
            </p>
            <div className="input_group">
              <i className="fa fa-user"></i>
              <label htmlFor="">
                {" "}
                <span>*</span>Email
              </label>
              <input
                type="email"
                placeholder="Username"
                className="input_text"
                autocomplete="off"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input_group">
              <i className="fa fa-unlock-alt"></i>
              <label htmlFor="">
                <span>*</span>Password
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input_text"
                autocomplete="off"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input_group">
              <i className="fa fa-unlock-alt"></i>
              <label htmlFor="">
                <span>*</span> Confirm Password
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input_text"
                autocomplete="off"
                // onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div
              className="button_group"
              id="login_button"
              onClick={(e) => formsubmitfunc(e)}
            >
              <NavLink to="/LoginIn">
                <a>Sign Up</a>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
