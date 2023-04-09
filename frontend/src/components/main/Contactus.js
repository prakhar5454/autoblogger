import React from 'react'
import './Contactus.css';

const Contactus = () => {
  return (
    <section className="vh-100 bg-image con-back " >
      <div className="mask d-flex align-items-center h-100">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: 15 }}>
                <div className="card-body p-5">
                 <div className ="Cont">
                 <h2 className="text-uppercase text-center mb-5 bold ">
                    CONTACT US
                  </h2></div> 
                  <form>
                    <label className="form-label" htmlFor="form3Example1cg">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="form3Example1cg"
                      className="form-control form-control-lg"
                    />


                    <label className="form-label" htmlFor="form3Example3cg">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="form3Example3cg"
                      className="form-control form-control-lg"
                    />


                    <label className="form-label" htmlFor="form3Example4cg">
                      Your Message
                    </label>
                    <textarea
                      type="text"
                      id="form3Example4cg"
                      className="form-control form-control-lg">
                    </textarea>

                    <div className="d-flex justify-content-center">
                      <button
                        type="button"
                        className="btn btn-success btn-block btn-lg mt-4"
                      >
                        Submit
                      </button>
                    </div>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Contactus