"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

function LabIntroduction() {
  // Custom Next Arrow component
  const NextArrow = ({ onClick }) => {
    return (
      <button
        className="slick-arrow1 "
        onClick={onClick}
      >
        {/* <FontAwesomeIcon icon={faChevronRight} className='right-arrow' /> */}
      </button>
    );
  };

  // Custom Previous Arrow component
  const PrevArrow = ({ onClick }) => {
    return (
      <button
        className="slick-arrow1 slick-prev1"
        onClick={onClick}
      >
        {/* <FontAwesomeIcon icon={faChevronLeft} /> */}
      </button>
    );
  };

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    dots: true,
    centerPadding: "30px",
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "10px",
        },
      },
    ],
  };

  return (
    <>
      {/*===========================
        Start CounterUp
      ===========================*/}
      <section className="counterup_area text-center section_padding">
        <div className="container">
          <div className="hero-section-title text-center">
            <h1>Lab Introduction</h1>
          </div>
          {/* end .hero-section-title */}
          <Slider {...settings}>
            {/* Slide 1 */}
            <div>
              <div className="counter_box1">
                <Image
                  width={400}
                  height={400}
                  src="/assets/images/services/1.jpg"
                  className="number_img_shape"
                  alt="Shape"
                  style={{ padding: "4px" }}
                  // Add margin to create distance between images
                />
                <div className="service_details1">
                  <a href="#">
                    <h3>966 EMC Laboratory</h3>
                  </a>
                  <p>
                    There are many variations passages of lorem ipsum available
                    but the majority have suffered alteration.
                  </p>
                  <a
                    href="#"
                    className="btn-yellow"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div>
              <div className="counter_box1">
                <Image
                  width={400}
                  height={400}
                  src="/assets/images/services/2.jpg"
                  className="number_img_shape"
                  alt="Shape"
                  style={{ padding: "4px" }}
                  // Add margin to create distance between images
                />
                <div className="service_details1">
                  <a href="#">
                    <h3>Conducted Emission Testing</h3>
                  </a>
                  <p>
                    There are many variations passages of lorem ipsum available
                    but the majority have suffered alteration.
                  </p>
                  <a
                    href="#"
                    className="btn-yellow"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>

            {/* Slide 3 */}
            <div>
              <div className="counter_box1">
                <Image
                  width={400}
                  height={400}
                  src="/assets/images/services/1.jpg"
                  className="number_img_shape"
                  alt="Shape"
                  style={{ padding: "4px" }}
                  // Add margin to create distance between images
                />
                <div className="service_details1">
                  <a href="#">
                    <h3>HUAK RS Testing Lab.</h3>
                  </a>
                  <p>
                    There are many variations passages of lorem ipsum available
                    but the majority have suffered alteration.
                  </p>
                  <a
                    href="#"
                    className="btn-yellow"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>

            {/* Rest of the slides */}
            {/* Slide 4 */}
            <div>
              <div className="counter_box1">
                <Image
                  width={400}
                  height={400}
                  src="/assets/images/services/1.jpg"
                  className="number_img_shape"
                  alt="Shape"
                  style={{ padding: "4px" }}
                  // Add margin to create distance between images
                />
                <div className="service_details1">
                  <a href="#">
                    <h3>DIP/EFT/SURGE Integrated Test System</h3>
                  </a>
                  <p>
                    There are many variations passages of lorem ipsum available
                    but the majority have suffered .
                  </p>
                  <a
                    href="#"
                    className="btn-yellow"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>

            {/* Slide 5 */}
            <div>
              <div className="counter_box1">
                <Image
                  src="/assets/images/services/2.jpg"
                  className="number_img_shape"
                  alt="Shape"
                  style={{ padding: "4px" }}
                  width={400}
                  height={400}
                  // Add margin to create distance between images
                />
                <div className="service_details1">
                  <a href="#">
                    <h3>Fully Automatic RF Test System</h3>
                  </a>
                  <p>
                    There are many variations passages of lorem ipsum available
                    but the majority have suffered alteration.
                  </p>
                  <a
                    href="#"
                    className="btn-yellow"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>

            {/* Slide 6 */}
            <div>
              <div className="counter_box1">
                <Image
                  src="/assets/images/services/1.jpg"
                  className="number_img_shape"
                  alt="Shape"
                  style={{ padding: "4px" }}
                  width={400}
                  height={400}
                  // Add margin to create distance between images
                />
                <div className="service_details1">
                  <a href="#">
                    <h3>Harmonic/Flicker</h3>
                  </a>
                  <p>
                    There are many variations passages of lorem ipsum available
                    but the majority have suffered alteration.
                  </p>
                  <a
                    href="#"
                    className="btn-yellow"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>

            {/* Slide 7 */}
            <div>
              <div className="counter_box1">
                <Image
                  width={400}
                  height={400}
                  src="/assets/images/services/3.jpg"
                  className="number_img_shape"
                  alt="Shape"
                  // Add margin to create distance between images
                />
                <div className="service_details1">
                  <a href="#">
                    <h3>Power Freq. Magnetic Field Immunity</h3>
                  </a>
                  <p>
                    There are many variations passages of lorem ipsum available
                    but the majority have suffered .
                  </p>
                  <a
                    href="#"
                    className="btn-yellow"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>

            {/* Slide 8 */}
            <div>
              <div className="counter_box1">
                <Image
                  width={400}
                  height={400}
                  src="/assets/images/services/2.jpg"
                  className="number_img_shape"
                  alt="Shape"
                  // Add margin to create distance between images
                />
                <div className="service_details1">
                  <a href="#">
                    <h3>Fully Automatic RF Test System</h3>
                  </a>
                  <p>
                    There are many variations passages of lorem ipsum available
                    but the majority have suffered alteration.
                  </p>
                  <a
                    href="#"
                    className="btn-yellow"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>

            {/* Slide 9 */}
            <div>
              <div className="counter_box1">
                <Image
                  width={400}
                  height={400}
                  src="/assets/images/services/1.jpg"
                  className="number_img_shape"
                  alt="Shape"
                  style={{ padding: "4px" }}
                  // Add margin to create distance between images
                />
                <div className="service_details1">
                  <a href="#">
                    <h3>Electrostatic Discharge Immunity Test</h3>
                  </a>
                  <p>
                    There are many variations passages of lorem ipsum available
                    but the majority have suffered .
                  </p>
                  <a
                    href="#"
                    className="btn-yellow"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </Slider>
          {/* end .row */}
        </div>
        {/* end .container */}
      </section>
      {/* end .counterup_area */}
    </>
  );
}

export default LabIntroduction;
