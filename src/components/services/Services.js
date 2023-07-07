import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./services.css";
import LatestNews from "../LatestNews";

function Services() {
  return (
    <>
      <Header />
      <section className="breadcrumb_section text-center section_padding">
        <ul className="breadcrumb">
          <li>
            <a href="index.html">Home</a>
          </li>
          <li> Services</li>
        </ul>
        <h1>Our services</h1>
      </section>

      <section className="bg-light pt-5 pb-5">
        <div className="container">
          <h2 className="text-center text-yellow">Services</h2>
        </div>
      </section>

      {/*===========================
        Start Service Style 2
===========================*/}
      <div className="service_style_2_area text-center section_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {/* <div className="service_img_info_box">
                
              </div> */}
              {/*end .service_img_info_box*/}
              <p className="col-md-10 col-md-offset-1">
                {" "}
                Manufacturers and importers of children's products must certify,
                in a written Children's Product Certificate (CPC) based on test
                results from a CPSC-accepted laboratory, that their children's
                products comply with applicable children's product safety rules.
                The CPC and supporting test reports must be in English. HUAK is
                one of the CPSC accredited laboratories,The laboratory
                registration number is: 1710. It is the first testing laboratory
                accredited by CPSC for the whole Scope in China, which can
                provide customers with compliant children's product testing and
                assist customers in drafting CPC certificates.
              </p>
            </div>
            {/*end .col-md-12*/}
          </div>
          {/*end .row*/}
        </div>
        {/*end .container*/}
      </div>
      {/*end .service_style_2_area*/}
      {/*===========================
        End Service Style 2
===========================*/}
      {/*===========================
        Start Service
===========================*/}

      <LatestNews />
      {/*===========================
        End Service
===========================*/}

      {/*===========================
        Start Service Benefits
===========================*/}
      <section className="service_benefits_area text-center section_border section_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="hero-section-title">
                <h1>Our benefits</h1>
              </div>
              {/*end .hero-section-title*/}
            </div>
            {/*end .col-md-12*/}
            <div className="col-md-3 col-sm-6">
              <div className="service_benefits_box">
                <i className="icon-big_clock" />
                <h3 className="benifitsheading">Emergency Service</h3>
              </div>
              {/*end .service_benefits_box*/}
            </div>
            {/*end col-md-3*/}
            <div className="col-md-3 col-sm-6">
              <div className="service_benefits_box">
                <i className="icon-wallet" />
                <h3 className="benifitsheading">
                  {" "}
                  ISO <br /> 17025
                </h3>
              </div>
              {/*end .service_benefits_box*/}
            </div>
            {/*end col-md-3*/}
            <div className="col-md-3 col-sm-6">
              <div className="service_benefits_box">
                <i className="icon-diploma" />
                <h3 className="benifitsheading">Satisfaction Guarantee</h3>
              </div>
              {/*end .service_benefits_box*/}
            </div>
            {/*end col-md-3*/}
            <div className="col-md-3 col-sm-6">
              <div className="service_benefits_box">
                <i className="icon-mechanic" />
                <h3 className="benifitsheading">12 Years Experience</h3>
              </div>
              {/*end .service_benefits_box*/}
            </div>
            {/*end col-md-3*/}
          </div>
          {/*end .row*/}
        </div>
        {/*end .container*/}
      </section>
      {/*end .service_benefits_area*/}
      {/*===========================
        End Service Benefits
===========================*/}

      <Footer />
    </>
  );
}

export default Services;
