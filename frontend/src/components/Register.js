import React from 'react';
import './register.css';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import Swal from 'sweetalert2';


const Register = () => {
 
    const navigate = useNavigate();
 
  const registerForm = useFormik({
    initialValues: {
      
      email: String,
    username: String,
    password: String,

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

  return (  <section className="vh-100 bg-image reg-back" >
  <div className="mask d-flex align-items-center h-100">
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card" style={{ borderRadius: 15 }}>
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5">
                Create an account
              </h2>
              <form>
              <label className="form-label" htmlFor="form3Example1cg">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="username"
                    value={registerForm.values.username}
                    onChange={registerForm.handleChange}
                    className="form-control form-control-lg"
                  />
                  
                
                  <label className="form-label" htmlFor="form3Example3cg">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={registerForm.values.email}
                    onChange={registerForm.handleChange}
                    className="form-control form-control-lg"
                  />
                  
              
                  <label className="form-label" htmlFor="form3Example4cg">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={registerForm.values.password}
                    onChange={registerForm.handleChange}
                    className="form-control form-control-lg"
                  />
                 
                 <label className="form-label" htmlFor="form3Example4cdg">
                    Repeat your password
                  </label>
                
                  <input
                    type="password"
                    id="form3Example4cdg"
                    className="form-control form-control-lg"
                  />
                 
                
                <div className="form-check d-flex justify-content-center mb-5">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    defaultValue=""
                    id="form2Example3cg"
                  />
                  <label className="form-check-label" htmlFor="form2Example3g">
                    I agree all statements in{" "}
                    <a href="#!" className="text-body">
                      <u>Terms of service</u>
                    </a>
                  </label>
                </div>
                <div className="d-flex justify-content-center">
                  <button
                    type="button"
                    className="btn dark bg-dark btn-block btn-lg"
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
