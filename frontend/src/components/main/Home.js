import React from "react";
import { Link, NavLink } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <div data-draggable="true" className="" style={{ position: "relative" }}>
                {/**/}
                {/**/}
                <section
                    draggable="false"
                    className="overflow-hidden pt-0"
                    data-v-271253ee=""
                >
                    <section className="mb-10 overflow-hidden">
                        {/* Background image */}
                        <div
                            className="px-4 py-5 px-md-5 text-center bg-image"
                            style={{
                                backgroundImage:
                                    'url("https://www.score.org/sites/default/files/styles/responsive_16_9_1000w/public/AdobeStock_339685570_blogging%20C.jpeg")',
                                height: 600,
                                backgroundSize: "cover",
                                backgroundPosition: "50% 50%",
                                backgroundColor: "rgba(0, 0, 0, 0)"
                            }}
                            aria-controls="#picker-editor"
                        >
                            <div
                                className="mask"
                                style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
                            >
                                <div className="container h-100">
                                    <div className="row d-flex justify-content-center align-items-center h-100">
                                        <div className="col-lg-10">
                                            <div className="text-white pb-5">
                                                <h1 className="my-md-5 mb-4 px-5 display-3 fw-bold ls-tight ">
                                                    <span>The One-Click Blog Generator</span> <br />
                                                    <span className=""></span>
                                                </h1>
                                                <NavLink
                                                    className="btn btn-outline-light btn-lg btn-rounded py-3 px-5 mb-2 mb-md-0 me-md-2"
                                                    to="/main/login"
                                                    role="button"
                                                    aria-controls="#picker-editor"
                                                >
                                                    Get started
                                                </NavLink>
                                                <a
                                                    className="btn btn-link btn-lg btn-rounded py-3 px-5 mb-2 mb-md-0 text-white"
                                                    style={{ backgroundColor: "transparent" }}
                                                    href="#learn-more"
                                                    role="button"
                                                    aria-controls="#picker-editor"
                                                >
                                                    Learn more
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className=""
                            style={{
                                height: 30,
                                marginTop: "-30px",
                                transform: "scale(2)",
                                transformOrigin: "top center",
                                color: "#fff"
                            }}
                        >
                            <svg viewBox="0 0 2880 48" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M 0 48 L 1437.5 48 L 2880 48 L 2880 0 L 2160 0 C 1453.324 60.118 726.013 4.51 720 0 L 0 0 L 0 48 Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </div>
                        {/* Background image */}
                    </section>
                </section>
                {/**/}
            </div>
            <div data-draggable="true" className="" style={{ position: "relative" }}>
                {/**/}
                {/**/}
                <section draggable="false" className="container pt-10" data-v-271253ee="" id="learn-more">
                    <section className="mb-10">
                        <h1 className="fw-bold mb-5 text-center">Latest articles</h1>
                        <div className="row gx-lg-5 mb-5 align-items-center">
                            <div className="col-md-6 mb-4 mb-md-0">
                                <img
                                    src="/Article1.png"
                                    className="w-100 shadow-4-strong rounded-4 mb-4"
                                    alt=""
                                    aria-controls="#picker-editor"
                                />
                            </div>
                            <div className="col-md-6 mb-4 mb-md-0">
                                <h3 className="fw-bold">Successful Peoples</h3>
                                <div className="mb-2 text-danger small">
                                    <i
                                        className="fas fa-money-bill me-2"
                                        aria-controls="#picker-editor"
                                    />
                                    <span>Motivation</span>
                                </div>
                                <p className="text-muted">
                                Do you often wonder what sets certain people up for success while others do not and what you may do to improve your odds? Do you often Google in inspiring sayings, watch videos of browsing commencement addresses on Youtube and devour the works of renowned life coaches. The key to success is a relentless focus on better oneself. The process of achieving success is artistic rather than scientific
                                </p>
                                <p className="text-muted">
                                To that end, I'd like to describe ten traits shared by very successful individuals, which you should adopt immediately to become your best self. Number one, successful people greet people by their namesw
                                </p>
                                <a
                                    className="btn btn-success"
                                    href="#"
                                    role="button"
                                    aria-controls="#picker-editor"
                                >
                                    Read more
                                </a>
                            </div>
                        </div>
                        <div className="row gx-lg-5 mb-5 flex-lg-row-reverse align-items-center">
                            <div className="col-md-6 mb-4 mb-md-0">
                                <img
                                    src="/Article2.png"
                                    className="w-100 shadow-4-strong rounded-4 mb-4"
                                    alt=""
                                    aria-controls="#picker-editor"
                                />
                            </div>
                            <div className="col-md-6 mb-4 mb-md-0">
                                <h3 className="fw-bold">Mukesh Ambani</h3>
                                <div className="mb-2 text-success small">
                                    <i
                                        className="fas fa-money-bill me-2"
                                        aria-controls="#picker-editor"
                                    />
                                    <span>Empowering the Future</span>
                                </div>
                                <p className="text-muted">
                                Nobody has ever achieved anything big in business or in any walk of life, without courage. Of course, whenever you do anything big, you do feel a little scared. But you've got to conquer to discover the hidden hero within you. My dear reliance family. Once again, a very warm good evening through each and every one of you. Over the last, I have been very fortunate to lead reliance. Everything I am today is because of reliance. Everything I know today is thanks to reliance. This evening, I want to share with you the most important lessons I have learned from my father during this phenomenal journey. The first lesson is courage. And I have seen it in a whole lot of you. Nobody has ever achieved anything big
                                </p>
                                <a
                                    className="btn btn-success"
                                    href="#"
                                    role="button"
                                    aria-controls="#picker-editor"
                                >
                                    Read more
                                </a>
                            </div>
                        </div>
                        <div className="row gx-lg-5 mb-5 align-items-center">
                            <div className="col-md-6 mb-4 mb-md-0">
                                <img
                                    src="/Article3.jpg"
                                    className="w-100 shadow-4-strong rounded-4 mb-4"
                                    alt=""
                                    aria-controls="#picker-editor"
                                />
                            </div>
                            <div className="col-md-6 mb-4 mb-md-0">
                                <h3 className="fw-bold">Dhoni</h3>
                                <div className="mb-2 text-warning small">
                                    <i
                                        className="fas fa-money-bill me-2"
                                        aria-controls="#picker-editor"
                                    />
                                    <span>Sports</span>
                                </div>
                                <p className="text-muted">
                                Their people all around their cars parked all around. Their people on the street, You look ahead, the thousands of people, you look behind this, thousands of people. And everybody had a smile on their face. None of them were sitting in the car. All of them are outside Here's the thing. I'm sure you've noticed this. Every time you come from an event, there's a standing ovation like this. It's... You are referred to very often as a as a legend. How does that feel? That's a price for feeling in itself, isn't it? It feels very old to start off because to be called. First of, I don't believe I'm. But to be called legend, which means you have spent a lot of time on the field. On the field but depending on whichever stream you come from you are from Bo wood whether you're are from cricket or any other sport or business banking, any sector. There's a survey where the results revealed that you are the second most admired man in India? That is a big deal. Second second to whom, Second to our prime minister? Well, I think I can stand in election
                                </p>
                                <a
                                    className="btn btn-success"
                                    href="#"
                                    role="button"
                                    aria-controls="#picker-editor"
                                >
                                    Read more
                                </a>
                            </div>
                        </div>
                    </section>
                </section>
                {/**/}
            </div>
            <div data-draggable="true" className="" style={{ position: "relative" }}>
                {/**/}
                {/**/}
                <section draggable="false" className="container pt-5" data-v-271253ee="">
                    <section className="mb-10 text-center">
                        <div className="d-flex justify-content-center">
                            <div className="text-center" style={{ maxWidth: 700 }}>
                                <h2 className="fw-bold mb-4 text-center">
                                    <span className="me-2">Why is it so</span>
                                    <u className="text-success">great?</u>
                                </h2>
                                <p className="text-muted mb-5">
                                    Can turn your video into blog in a single click
                                </p>
                            </div>
                        </div>
                        <div className="row gx-lg-5">
                            <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                                <div className="p-3 bg-success rounded-circle shadow-2-strong d-inline-block mb-4">
                                    <i
                                        className="fas fa-headset fa-lg text-white fa-fw"
                                        aria-controls="#picker-editor"
                                    />
                                </div>
                                <h5 className="fw-bold mb-3">Support 24/7</h5>
                                <p className="text-muted mb-0">
                                    
                                </p>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                                <div className="p-3 bg-success rounded-circle shadow-2-strong d-inline-block mb-4">
                                    <i
                                        className="fas fa-shield-alt fa-lg text-white fa-fw"
                                        aria-controls="#picker-editor"
                                    />
                                </div>
                                <h5 className="fw-bold mb-3">Safe and solid</h5>
                                <p className="text-muted mb-0">
                                   
                                </p>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-5 mb-md-0">
                                <div className="p-3 bg-success rounded-circle shadow-2-strong d-inline-block mb-4">
                                    <i
                                        className="fas fa-shipping-fast fa-lg text-white fa-fw"
                                        aria-controls="#picker-editor"
                                    />
                                </div>
                                <h5 className="fw-bold mb-3">Extremely fast</h5>
                                <p className="text-muted mb-0">
                                    
                                </p>
                            </div>
                            <div className=" row-lg-2 col-lg-3 col-md-6 mb-5 mb-md-0">
                                <div className="p-3 bg-success rounded-circle shadow-2-strong d-inline-block mb-4">
                                    <i
                                        className="fas fa-chart-pie fa-lg text-white fa-fw"
                                        aria-controls="#picker-editor"
                                    />
                                </div>
                                <h5 className="fw-bold mb-3">Live analytics</h5>
                                <p className="text-muted mb-0">
                                   
                                </p>
                            </div>
                        </div>
                    </section>
                </section>
                {/**/}
            </div>
            <div data-draggable="true" className="" style={{ position: "relative" }}>
                {/**/}
                {/**/}
                <section draggable="false" className="container pt-5" data-v-271253ee="">
                    <section className="mb-10 text-center">
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-10 col-xl-8">
                                <h2 className="fw-bold mb-5">Testimonials</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 mb-5 mb-md-0">
                                <div className="d-flex justify-content-center mb-4">
                                    <img
                                        src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg"
                                        className="rounded-circle shadow-1-strong"
                                        width={150}
                                        height={150}
                                        alt=""
                                        aria-controls="#picker-editor"
                                    />
                                </div>
                                <h5 className="mb-3">Maria Smantha</h5>
                                <h6 className="text-success mb-3">Web Developer</h6>
                                <p className="px-xl-3">
                                    <i className="fas fa-quote-left pe-2" />
                                    <span>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                                        eos id officiis hic tenetur quae quaerat ad velit ab hic
                                        tenetur.
                                    </span>
                                </p>
                                <ul className="list-unstyled d-flex justify-content-center mb-0">
                                    <li>
                                        <i className="fas fa-star fa-sm text-warning" />
                                    </li>
                                    <li>
                                        <i className="fas fa-star fa-sm text-warning" />
                                    </li>
                                    <li>
                                        <i className="fas fa-star fa-sm text-warning" />
                                    </li>
                                    <li>
                                        <i className="fas fa-star fa-sm text-warning" />
                                    </li>
                                    <li>
                                        <i className="fas fa-star-half-alt fa-sm text-warning" />
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-4 mb-5 mb-md-0">
                                <div className="d-flex justify-content-center mb-4">
                                    <img
                                        src="https://mdbootstrap.com/img/Photos/Avatars/img%20(2).jpg"
                                        className="rounded-circle shadow-1-strong"
                                        width={150}
                                        height={150}
                                        alt=""
                                        aria-controls="#picker-editor"
                                    />
                                </div>
                                <h5 className="mb-3">Lisa Cudrow</h5>
                                <h6 className="text-success mb-3">Graphic Designer</h6>
                                <p className="px-xl-3">
                                    <i className="fas fa-quote-left pe-2" />
                                    <span>
                                        Ut enim ad minima veniam, quis nostrum exercitationem ullam
                                        corporis suscipit laboriosam, nisi ut aliquid commodi.
                                    </span>
                                </p>
                                <ul className="list-unstyled d-flex justify-content-center mb-0">
                                    <li>
                                        <i className="fas fa-star fa-sm text-warning" />
                                    </li>
                                    <li>
                                        <i className="fas fa-star fa-sm text-warning" />
                                    </li>
                                    <li>
                                        <i className="fas fa-star fa-sm text-warning" />
                                    </li>
                                    <li>
                                        <i className="fas fa-star fa-sm text-warning" />
                                    </li>
                                    <li>
                                        <i className="fas fa-star fa-sm text-warning" />
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-4 mb-0">
                                <div className="d-flex justify-content-center mb-4">
                                    <img
                                        src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                                        className="rounded-circle shadow-1-strong"
                                        width={150}
                                        height={150}
                                        alt=""
                                        aria-controls="#picker-editor"
                                    />
                                </div>
                                <h5 className="mb-3">John Smith</h5>
                                <h6 className="text-success mb-3">Marketing Specialist</h6>
                                <p className="px-xl-3">
                                    <i className="fas fa-quote-left pe-2" />
                                    <span>
                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                        blanditiis praesentium voluptatum deleniti atque corrupti.
                                    </span>
                                </p>
                                <ul className="list-unstyled d-flex justify-content-center mb-0">
                                    <li>
                                        <i className="fas fa-star fa-sm text-warning" />
                                    </li>
                                    <li>
                                        <i className="fas fa-star fa-sm text-warning" />
                                    </li>
                                    <li>
                                        <i className="fas fa-star fa-sm text-warning" />
                                    </li>
                                    <li>
                                        <i className="fas fa-star fa-sm text-warning" />
                                    </li>
                                    <li>
                                        <i className="far fa-star fa-sm text-warning" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </section>
                {/**/}
            </div>
            <div
                data-draggable="true"
                className=""
                style={{ position: "relative" }}
                draggable="false"
            >
                {/**/}
                {/**/}
                <section draggable="false" className="container pt-5" data-v-271253ee="">
                    <section className="mb-10 text-center">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-6">
                                <div className="p-3 bg-success rounded-circle shadow-2-strong d-inline-block mb-4">
                                    <i
                                        className="fas fa-envelope fa-lg text-white fa-fw"
                                        aria-controls="#picker-editor"
                                    />
                                </div>
                                <h2 className="fw-bold mb-4">Subscribe to the newsletter</h2>
                                <p className="text-muted mb-4">
                                    We will write rarely and only high-quality content.
                                </p>
                                <div className="d-md-flex flex-row text-center">
                                    <div className="form-outline flex-fill me-1 mb-4 mb-md-0">
                                        <input
                                            type="email"
                                            id="formControlEmail0"
                                            className="form-control form-control-lg"
                                        />
                                        <label
                                            className="form-label"
                                            htmlFor="formControlEmail0"
                                            style={{ marginLeft: 0 }}
                                        >
                                            Enter your email
                                        </label>
                                        <div className="form-notch">
                                            <div className="form-notch-leading" style={{ width: 9 }} />
                                            <div className="form-notch-middle" style={{ width: 100 }} />
                                            <div className="form-notch-trailing" />
                                        </div>
                                    </div>
                                    {/* Submit button */}
                                    <button
                                        type="submit"
                                        className="btn btn-success btn-lg ms-md-2"
                                        aria-controls="#picker-editor"
                                    >
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
                {/**/}
            </div>
        </div>

    );
};

export default Home;
