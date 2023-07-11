import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

function LatestNews() {
  useEffect(() => {
    adjustBoxHeights();
    window.addEventListener("resize", adjustBoxHeights);
    return () => {
      window.removeEventListener("resize", adjustBoxHeights);
    };
  }, []);

  const adjustBoxHeights = () => {
    const boxes = document.querySelectorAll(".blog_share_box");
    let maxHeight = 0;
    boxes.forEach((box) => {
      box.style.height = "auto";
      const boxHeight = box.offsetHeight;
      if (boxHeight > maxHeight) {
        maxHeight = boxHeight;
      }
    });
    boxes.forEach((box) => {
      box.style.height = `${maxHeight}px`;
    });
  };

  // Slider settings
  const settings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      {/*===========================
        Start Blog
      ===========================*/}
      <section className="blog_share_area section_padding">
        <div className="container">
          <div className="hero-section-title text-center">
            <h2 style={{ color: "#2c347c" }}>Common Services</h2>
          </div>

          <Slider {...settings}>
            <div>
              <div className="blog_share_box">
                <div className="row">
                  <div className="col-md-4">
                    <div className="bl_share_img">
                      <img
                        src="/assets/images/services/ce-service.png"
                        alt="blog 1"
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="blog_share_details">
                      <h1>
                        <a href="#">CE Certification</a>
                      </h1>
                      <p>
                        CE certification, which is limited to the product does not
                        endanger the basic safety requirements of human, animal and
                        cargo safety aspects, rather than the general
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="blog_share_box">
                <div className="row">
                  <div className="col-md-4">
                    <div className="bl_share_img">
                      <img
                        src="/assets/images/services/rohs-service.png"
                        alt="blog 2"
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="blog_share_details">
                      <h1>
                        <a href="#">RoHS testing</a>
                      </h1>
                      <p>
                        There are many variations passages of lorem ipsum available
                        but the majority have suffered alteration.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="blog_share_box">
                <div className="row">
                  <div className="col-md-4">
                    <div className="bl_share_img">
                      <img
                        src="/assets/images/services/rcm-service.png"
                        alt="blog 3"
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="blog_share_details">
                      <h1>
                        <a href="#">REACH testing</a>
                      </h1>
                      <p>
                        There are many variations passages of lorem ipsum available
                        but the majority have suffered alteration.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="blog_share_box">
                <div className="row">
                  <div className="col-md-4">
                    <div className="bl_share_img">
                      <img
                        src="/assets/images/services/telec-service.png"
                        alt="blog 4"
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="blog_share_details">
                      <h1>
                        <a href="#">Japan TELEC certification</a>
                      </h1>
                      <p>
                        There are many variations passages of lorem ipsum available
                        but the majority have suffered alteration.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="blog_share_box">
                <div className="row">
                  <div className="col-md-4">
                    <div className="bl_share_img">
                      <img src="/assets/images/ic.jpg" alt="blog 5" />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="blog_share_details">
                      <h1>
                        <a href="#">Canadian IC certification</a>
                      </h1>
                      <p>
                        There are many variations passages of lorem ipsum available
                        but the majority have suffered alteration.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="blog_share_box">
                <div className="row">
                  <div className="col-md-4">
                    <div className="bl_share_img">
                      <img src="/assets/images/cpc.jpg" alt="blog 6" />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="blog_share_details">
                      <h1>
                        <a href="#">Toy CPC certification</a>
                      </h1>
                      <p>
                        There are many variations passages of lorem ipsum available
                        but the majority have suffered alteration.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="blog_share_box">
                <div className="row">
                  <div className="col-md-4">
                    <div className="bl_share_img">
                      <img
                        src="/assets/images/services/rcm-service.jpg"
                        alt="blog 7"
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="blog_share_details">
                      <h1>
                        <a href="#">Australian RCM certification</a>
                      </h1>
                      <p>
                        There are many variations passages of lorem ipsum available
                        but the majority have suffered alteration.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="blog_share_box">
                <div className="row">
                  <div className="col-md-4">
                    <div className="bl_share_img">
                      <img
                        src="/assets/images/cb-certification.jpg"
                        alt="blog 8"
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="blog_share_details">
                      <h1>
                        <a href="#">CB certification</a>
                      </h1>
                      <p>
                        There are many variations passages of lorem ipsum available
                        but the majority have suffered alteration.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="blog_share_box">
                <div className="row">
                  <div className="col-md-4">
                    <div className="bl_share_img">
                      <img src="/assets/images/un38.jpg" alt="blog 9" />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="blog_share_details">
                      <h1>
                        <a href="#">UN38.3 testing</a>
                      </h1>
                      <p>
                        There are many variations passages of lorem ipsum available
                        but the majority have suffered alteration.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="blog_share_box">
                <div className="row">
                  <div className="col-md-4">
                    <div className="bl_share_img">
                      <img
                        src="/assets/images/services/fcc-service.png"
                        alt="blog 10"
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="blog_share_details">
                      <h1>
                        <a href="#">FCC certification</a>
                      </h1>
                      <p>
                        There are many variations passages of lorem ipsum available
                        but the majority have suffered alteration.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>

          {/* <div className="text-center">
            <Link to="services" className="btn-yellow">
              All Services
            </Link>
          </div> */}
        </div>
      </section>

      {/*===========================
        End Blog
      ===========================*/}
    </>
  );
}

export default LatestNews;
