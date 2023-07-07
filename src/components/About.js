import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <section className="about_area section_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="about-image__updated">
                <img src="/assets/images/about.jpg" alt="" />
                <img className="overlay-image" src="/assets/images/news5 (2).jpg" alt="" />
              </div>
              <div className="experience-box">
                <p>Year of Experience</p>
                <div className="counter">
                  <h2>12</h2>
                  <span>+</span>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="about_details">
                <div className="hero-title-with-shape">
                  <h4 className="heading_with_border">
                    Welcome to Shenzhen HUAK Testing Technology
                  </h4>
                </div>
                <p>
                  As a well-known third-party testing laboratory in China,
                  HUAK Testing has been around for 12 years and has served
                  millions of companies. It has been recognized by many
                  international organizations, including China National
                  Accreditation Administration for Conformity Assessment and
                  A2LA, etc.
                </p>
                <div className="text-center">
                  <Link to="about" className="btn-yellow">
                    LEARN MORE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
