import React, { useEffect, useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";

//Declaration section
const Register = () => {
  //for get  //for set data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const navigate=useNavigate()
  

  //Logic section
  const validate = () => {
    const newError = {};

    if (!formData.name.trim()) {
      newError.name = "full name is required.";
    } else if (formData.name.length <= 3) {
      newError.name = "minimum 3 character required.";
    }

    if (!formData.email.trim()) {
      newError.email = "email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newError.name = "invalid email format.";
    }

    if (!formData.phone.trim()) {
      newError.phone = "phone number is required.";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newError.phone = "phone must be in 10 digit.";
    }

    if (!formData.password.trim()) {
      newError.password = "password is required.";
    } else if (formData.password.length < 6) {
      newError.password = "minimum 6 character required.";
    }

    setErrors(newError);
    return Object.keys(newError).length === 0;
  };

  const handleInputChange = (e) => {
    // console.log(e.target.name, e.target.value);
    //e.target.name=e.target.value
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: ""
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //page refresh na thay etale
    if (validate()) {
      localStorage.setItem('authData',JSON.stringify(formData))//for store data in local storage
      alert('regisrtation succesfull!!')
      navigate("/login")
    }
  };
  // useEffect(() => {
  //   console.log(formData);
  // }, [formData]);

  // design section
  return (
    <>
      <div className="form-container">
        <h1 className="form-title">This is Register</h1>
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              placeholder="Enter Your full name"
              onChange={handleInputChange}
            />
            {errors.name && <span className="error-msg">{errors.name}</span>}
          </div>
          {/* Email Field */}
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              placeholder="Enter Your email"
              onChange={handleInputChange}
            />
            {errors.email && <span className="error-msg">{errors.email}</span>}
          </div>
          {/* Phone Number Field */}
          <div className="form-group">
            <label htmlFor="Phone"> Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              placeholder="Enter Your phone Number"
              onChange={handleInputChange}
            />
            {errors.phone && <span className="error-msg">{errors.phone}</span>}
          </div>

          {/* Password Field */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              placeholder="Create a password"
              onChange={handleInputChange}
            />
            {errors.password && (
              <span className="error-msg">{errors.password}</span>
            )}
          </div>
          {/* Submit Button */}
          <button type="submit" className="btn-primary">
            Register
          </button>
        </form>
        <p className="link-text">
          Already have an account?<Link to="/login">Login</Link>
        </p>
      </div>
    </>
  );
};

export default Register;
