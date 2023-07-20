"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
// import "./banner.css";

const Banner = () => {
  const NextArrow = ({ onClick }) => {
    return (
      <button
        className="slick-arrow1 "
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <button
        className="slick-arrow2 "
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
    );
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section className="header_slider_area">
      <Slider {...settings}>
        <div className="header_slider_bg">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <h1>
                  {" "}
                  Quality Wins Customers, Reputation Creates{" "}
                  <span className="span-slide">Benefits! </span>
                </h1>
                <div className="slide_button">
                  <a
                    href="#"
                    className="btn-yellow"
                  >
                    GET A FREE QUOTE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header_slider_bg slider_bg2">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <h1>
                  Faimess, Rigorous, Authority,{" "}
                  <span className="span-slide">Effciency.</span>
                </h1>
                <div className="slide_button">
                  <a
                    href="#"
                    className="btn-yellow"
                  >
                    GET A FREE QUOTE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header_slider_bg slider_bg3">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <h1>
                  Honesty-Based, Professional Service, Innovation, Strive For
                  Excellence, <span className="span-slide">Win The World.</span>
                </h1>
                <div className="slide_button">
                  <a
                    href="#"
                    className="btn-yellow"
                  >
                    GET A FREE QUOTE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default Banner;
