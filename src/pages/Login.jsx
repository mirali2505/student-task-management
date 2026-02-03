import React, { useState } from "react";
import "./Login.css";
import { Link, Navigate, useNavigate } from "react-router-dom";

function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({});

  const navigate=useNavigate();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    setError({
      ...error,
      [e.target.name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const saveData = JSON.parse(localStorage.getItem("authData"));
      if (
        saveData.email === data.email &&
        saveData.password === data.password
      ) {
        localStorage.setItem("lData",JSON.stringify(data))
        alert("Login Succesfully ......");
        navigate("/dashboard");
      }
    } else {
      alert("Somthing went Wrong");
    }
  };
  const validate = () => {
    const newError = {};
    if (!data.email.trim()) {
      newError.email = "Email is Required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newError.email = "Invalide Email formate.";
    }
    if (!data.password.trim()) {
      newError.password = "Password is Required.";
    } else if (data.password.length < 6) {
      newError.password = "Minimum 6 Character Required.";
    }
    setError(newError);
    return Object.keys(newError).length === 0;
  };
  return (
    <div className="form-container">
      <h1 className="form-title">Welcome Back</h1>
      <form action="" onSubmit={handleSubmit}>
        {/* email feild */}
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            id="email"
            value={data.email}
            onChange={handleChange}
          />
        </div>
        {/* password feild */}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Create a password"
            name="password"
            id="password"
            value={data.password}
            onChange={handleChange}
          />
        </div>
        {/* submit button */}
        <button type="submit" className="btn-primary">
          Login
        </button>
      </form>
      <p className="link-text">
        Don't have an account? <Link to="/register">Register Here</Link>
      </p>
    </div>
  );
}

export default Login;