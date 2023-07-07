import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CommonServices() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      {/*===========================
        Start Service
      ===========================*/}
      <section className="service_area section_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="hero-section-title text-center">
                <h2 style={{ color: "#2c347c" }}>
                  Qualification & Certificate
                </h2>
              </div>
              {/*end .hero-section-title*/}
            </div>
            {/*end .col-md-12*/}
          </div>
          <div className="row">
            <div className="col-md-12">
              <Slider {...settings}>
                <div className="service_box">
                  <div className="service_img">
                    <img
                      src="/assets/images/blog/news-1.jpg"
                      alt="Service 1"
                      style={{ width: "50%", height: "auto" }}
                    />
                    <div className="icon-box">
                      <i className="icon-snow" />
                    </div>
                  </div>
                  <div className="service_details">
                    <a href="#">
                      <h2>
                        HUAK Testing Lab. Approved FCC Authorized Laboratory
                      </h2>
                    </a>
                    <p>
                      From now on, the FCC will no longer accept test reports from
                      accredited laboratories (Accredited Laboratory), and such
                      laboratories will not ...
                    </p>
                    <a href="#" className="btn-yellow">
                      LEARN MORE
                    </a>
                  </div>
                </div>
                <div className="service_box">
                  <div className="service_img">
                    <img
                      src="/assets/images/blog/news-2.jpg"
                      alt="Service 2"
                      style={{ width: "50%", height: "auto" }}
                    />
                    <div className="icon-box">
                      <i className="icon-fire" />
                    </div>
                  </div>
                  <div className="service_details">
                    <a href="#">
                      <h2>
                        SASO Authorized (HUAK) Registration Certificate of Laboratory
                      </h2>
                    </a>
                    <p>
                      SASO Authorized (HUAK) Registration Certificate of Laboratory,
                      HUAK Testing SASO Approved Scope: SASO 2870, SASO 2902, SASO 2927.
                    </p>
                    <a href="#" className="btn-yellow">
                      LEARN MORE
                    </a>
                  </div>
                </div>
                <div className="service_box">
                  <div className="service_img">
                    <img
                      src="/assets/images/blog/news-3.jpg"
                      alt="Service 3"
                      style={{ width: "50%", height: "auto" }}
                    />
                    <div className="icon-box">
                      <i className="icon-ac" />
                    </div>
                  </div>
                  <div className="service_details">
                    <a href="#">
                      <h2>
                        HUAK Testing Lab. was successfully recognized by the A2LA
                      </h2>
                    </a>
                    <p>
                      Shenzhen HUAK Testing Technology Co., Ltd. (EMC/RF Lab)
                      successfully passed the on-site review conducted by senior
                      A2LA review experts ...
                    </p>
                    <a href="#" className="btn-yellow">
                      LEARN MORE
                    </a>
                  </div>
                </div>
               












               
              </Slider>
            </div>
          </div>
          {/*end .row*/}
        </div>
        {/*end .container*/}
      </section>
      {/*end .service_area*/}
      {/*===========================
        End Service
      ===========================*/}
    </>
  );
}

export default CommonServices;
