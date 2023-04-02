import React from "react";
import "./Login.css";
import {useFormik} from 'formik';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

const Login = () => {

  const navigate = useNavigate();
 
  const loginForm = useFormik({
    initialValues: {
      
      email:'',
      password:'',
      

    },
    onSubmit: async (formdata) => {
      console.log(formdata);
  
      const response = await fetch("http://localhost:5000/user/authenticate", {
        method: "POST",
        body: JSON.stringify(formdata), //converting javascript object to json
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.status === 200) {
        response.json().then(data => {
          console.log(data);
          sessionStorage.setItem('user', JSON.stringify(data));
          
          Swal.fire({
            icon: "success",
            title: "Login Successful",
            text: "You have done a wonderful job!",
          }).then(() => {
            navigate('/user/managevideo');
          })
        })
      } else {
        console.log("error occured");
      }
    }
  })

  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img src="/logo.png" className="img-fluid" alt="Sample image" />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form onSubmit={loginForm.handleSubmit}>
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                <button type="button" className="btn  btn-floating mx-1">
                  <i className="fab fa-facebook-f" />
                </button>
                <button type="button" className="btn  btn-floating mx-1">
                  <i className="fab fa-twitter" />
                </button>
                <button type="button" className="btn  btn-floating mx-1">
                  <i className="fab fa-linkedin-in" />
                </button>
              </div>
              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0">Or</p>
              </div>
              {/* Email input */}
              <label className="form-label" htmlFor="form3Example3">
                Email address
              </label>
              <input
                type="email"
                id="email"
                value={loginForm.values.email}
                onChange={loginForm.handleChange}
                className="form-control form-control-lg"
                placeholder="Enter a valid email address"
              />
              {/* Password input */}
              <label className="form-label" htmlFor="form3Example4">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={loginForm.values.password}
                onChange={loginForm.handleChange}
                className="form-control form-control-lg"
                placeholder="Enter password"
              />

              <div className="d-flex justify-content-between align-items-center">
                {/* Checkbox */}
                <div className="form-check mb-0">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    defaultValue=""
                    id="form2Example3"
                  />
                  <label className="form-check-label" htmlFor="form2Example3">
                    Remember me
                  </label>
                </div>
                <a href="#!" className="text-body">
                  Forgot password?
                </a>
              </div>
              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="button"
                  className="btn btn-danger  btn-lg"
                  style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                >
                  Login
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account?{" "}
                  <a href="#!" className="link-danger">
                    Register
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 dark bg-danger">
        {/* Copyright */}
        <div className="text-white mb-3 mb-md-0">
          Copyright © 2020. All rights reserved.
        </div>
        {/* Copyright */}
        {/* Right */}
        <div>
          <a href="#!" className="text-white me-4">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#!" className="text-white me-4">
            <i className="fab fa-twitter" />
          </a>
          <a href="#!" className="text-white me-4">
            <i className="fab fa-google" />
          </a>
          <a href="#!" className="text-white">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
        {/* Right */}
      </div>
    </section>
  );
};

export default Login;
