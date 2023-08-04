import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import "./labintroductionPage.css";

function LabIntroductionPage() {
  return (
    <>
      <Header />
      <section className="breadcrumb_section text-center section_padding">
        <ul className="breadcrumb">
          <li>
            <a href="index.html">Home</a>
          </li>
          <li> </li>
        </ul>
        <h1>Lab Introduction</h1>
      </section>

      <section className="bg-light pt-5 pb-5">
        <div className="container">
          <h2 className="text-center text-yellow">Lab Introduction</h2>
        </div>
      </section>

      <section className="lab-intro-section">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="box">
                <img
                  src="/assets/images/services/1.jpg"
                  className="labimage"
                  alt=""
                />
                <button>HUAK 5G Test Labss</button>
              </div>
            </div>
            <div className="col-md-3">
              <div className="box">
                <img
                  src="/assets/images/services/2.jpg"
                  alt=""
                />
                <button>Power Freq. Magnetic Field </button>
              </div>
            </div>
            <div className="col-md-3">
              <div className="box">
                <img
                  src="/assets/images/services/3.jpg"
                  alt=""
                />
                <button>Power Freq. Magnetic Field</button>
              </div>
            </div>
            <div className="col-md-3">
              <div className="box">
                <img
                  src="/assets/images/services/4.jpg"
                  alt=""
                />
                <button>HUAK RS Testing Lab.</button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="box">
                <img
                  src="/assets/images/7.png"
                  className="labimage"
                  alt=""
                />
                <button>Electrostatic Test</button>
              </div>
            </div>
            <div className="col-md-3">
              <div className="box">
                <img
                  src="/assets/images/8.png"
                  alt=""
                />
                <button>DIP/EFT/SURGE Integrated </button>
              </div>
            </div>
            <div className="col-md-3">
              <div className="box">
                <img
                  src="/assets/images/9.jpg"
                  alt=""
                />
                <button>HUAK 5G Test Lab.</button>
              </div>
            </div>
            <div className="col-md-3">
              <div className="box">
                <img
                  src="/assets/images/11.jpg"
                  alt=""
                />
                <button>Energy Efficiency Test</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default LabIntroductionPage;
