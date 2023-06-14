import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './banner.css';


function Banner() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <section className="header_slider_area">
      <Slider {...settings}>
        <div className="header_slider_bg">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
               
                <p><span className="subtitle_number">01</span> Australian Certification Project</p>
                <h1>RCM Certification</h1>
                <div className="slide_button">
                  <a href="#" className="btn-yellow">GET A FREE QUOTE</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header_slider_bg slider_bg2">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <p><span className="subtitle_number">02</span> Certification Project of Asian</p>
                <h1>TELEC Certification</h1>
                <div className="slide_button">
                  <a href="#" className="btn-yellow">GET A FREE QUOTE</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header_slider_bg slider_bg3">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <p><span className="subtitle_number">03</span> EU Certification Project</p>
                <h1>RoHS Certification</h1>
                <div className="slide_button">
                  <a href="#" className="btn-yellow">GET A FREE QUOTE</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
}

export default Banner;