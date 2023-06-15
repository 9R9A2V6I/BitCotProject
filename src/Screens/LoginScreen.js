import React, { useState, useEffect } from "react";
import "./Styles/LoginScreen.css";
import { NavLink,useNavigate } from "react-router-dom";

export const IsLogedIn = () => {
  const data = localStorage.getItem("email");
  if (data == null) {
    return false;
  } else if (data == undefined) {
    return false;
  } else {
    return true;
  }
};

export default function LoginScreen() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  
  const Navigate=useNavigate();


  const localEmail=localStorage.getItem("email")
  const localPassword=localStorage.getItem("password")

  const [token, setToken] = useState();
  // console.log(username,password);
 
  console.log(password, email);

  const formsubmitfunc = (e) => {
    e.preventDefault();
    

    if(email==localEmail&&password==localPassword){
      return Navigate('/')
  }else{
      alert("Please Enter valid Credential")
  }
    
  };

  
  return (
    <>
      <div className="loginContainer">
        <form className="login_form_container" onSubmit={formsubmitfunc}>
          <div className="login_form">
            <h2>
              bit<span className="logoSpan">cot</span>
            </h2>
            <p className="logoPara">Solving Digital Challeges</p>
            <p>
              Don't have an account yet?
              <NavLink to="/SignUp">
                <span className="signUpLink">Sign Up</span>
              </NavLink>
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

            <div className="button_group" id="login_button">
              <button type="submit">Sign In</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
