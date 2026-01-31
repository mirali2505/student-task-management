import React from "react";
import "./Register.css";
const Register = () => {
  return (
    <>
    
      <div class="form-container">
        <h1 className="form-title">REGISTER</h1>
        <form>
          <div className="form-group">
            <lable htmlfor="name">Full Name</lable>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Your Full Name"
            ></input>
          </div>

          <div className="form-group">
            <label htmlfor="email">Email-Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Your Email"
            ></input>
          </div>

          <div className="form-group">
            <label htmlfor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter Your Phone Number"
            ></input>
          </div>

          <div className="form-group">
            <lable htmlfor="Password">Password</lable>
            <input
              type="Password"
              id="Password"
              name="Password"
              placeholder="Create a Password"
            ></input>
          </div>

          <button type="submit" className="btn-primary">
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
