import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function CommonServices() {
  const carouselConfig = {
    
    responsive: {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        infinite: true, 
        items: 4,
        partialVisibilityGutter: 40,
      },
      tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 2,
        partialVisibilityGutter: 30,
      },
      mobile: {
        breakpoint: { max: 768, min: 0 },
        items: 1,
        partialVisibilityGutter: 20,
      },
    },
    swipeable: true,
    draggable: true,
    infinite: true,
    keyBoardControl: true,
    customTransition: 'all 1s linear',
    transitionDuration: 1000,
    containerClass: 'carousel-container',
    dotListClass: 'custom-dot-list-style',
    itemClass: 'carousel-item-padding-40-px',
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
                <h2 style={{ color: '#2c347c' }}>
                  Qualification & Certificate
                </h2>
              </div>
              {/*end .hero-section-title*/}
            </div>
            {/*end .col-md-12*/}
          </div>
          <div className="row">
            <div className="col">
              <Carousel
              responsive={carouselConfig.responsive}
              swipeable={carouselConfig.swipeable}
              draggable={carouselConfig.draggable}
              infinite={carouselConfig.infinite}
              keyBoardControl={carouselConfig.keyBoardControl}
              customTransition={carouselConfig.customTransition}
              transitionDuration={carouselConfig.transitionDuration}
              containerClass={carouselConfig.containerClass}
              dotListClass={carouselConfig.dotListClass}
              itemClass={carouselConfig.itemClass}
              autoPlay={true} // Enable automatic sliding
              autoPlaySpeed={2000} // Set slide duration (in milliseconds)
              >
                <div className="service_box">
                  <div className="service_img">
                    <img
                      src="/assets/images/blog/news-1.jpg"
                      alt="service 1"
                      style={{ width: '50%', height: 'auto' }}
                    />
                  </div>
                  <div className="service_details">
                    <a href="#">
                      <h2>HUAK Testing Lab. Approved FCC Authorized Laboratory</h2>
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
                      alt="service 2"
                      style={{ width: '50%', height: 'auto' }}
                    />
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
                      alt="service 3"
                      style={{ width: '50%', height: 'auto' }}
                    />
                  </div>
                  <div className="service_details">
                    <a href="#">
                      <h2>HUAK Testing Lab. was successfully recognized by the A2LA</h2>
                    </a>
                    <p>
                      Shenzhen HUAK Testing Technology Co., Ltd. (EMC/RF Lab)
                      successfully passed the on-site review conducted by senior A2LA
                      review experts ...
                    </p>
                    <a href="#" className="btn-yellow">
                      LEARN MORE
                    </a>
                  </div>
                </div>
                <div className="service_box">
                  <div className="service_img">
                    <img
                      src="/assets/images/202104291137064751.png"
                      alt="service 4"
                      style={{ width: '77%', height: '99px' }}
                    />
                  </div>
                  <div className="service_details">
                    <a href="#">
                      <h2>HUAK Successfully Joined Amazon Service Provider Network</h2>
                    </a>
                    <p>HUAK Testing Lab. Became Amazon's Official Testing and Certification Service Provider</p>
                    <a href="#" className="btn-yellow">
                      LEARN MORE
                    </a>
                  </div>
                </div>
                <div className="service_box">
                  <div className="service_img">
                    <img
                      src="/assets/images/news6.jpg"
                      alt="service 5"
                      style={{ width: '50%', height: 'auto' }}
                    />
                  </div>
                  <div className="service_details">
                    <a href="#">
                      <h2>SASO Certification Authorization</h2>
                    </a>
                    <p>
                      SASO Certification Authorization. On May 21, 2018, HUAK signed an
                      accreditation cooperation agreement with the Saudi Standards,
                      Metrology and Quality (SASO)
                    </p>
                    <a href="#" className="btn-yellow">
                      LEARN MORE
                    </a>
                  </div>
                </div>
                <div className="service_box">
                  <div className="service_img">
                    <img
                      src="/assets/images/services/cpc-service.png"
                      alt="service 6"
                      style={{ width: '50%', height: 'auto' }}
                    />
                  </div>
                  <div className="service_details">
                    <a href="#">
                      <h2>Good news: HUAK has Completed the Full Expansion of CPSC Scope</h2>
                    </a>
                    <p>Good news: HUAK has Completed the Full Expansion of CPSC Scope</p>
                    <a href="#" className="btn-yellow">
                      LEARN MORE
                    </a>
                  </div>
                </div>
                <div className="service_box">
                  <div className="service_img">
                    <img
                      src="/assets/images/services/rcm-service.png"
                      alt="service 7"
                      style={{ width: '50%', height: 'auto' }}
                    />
                  </div>
                  <div className="service_details">
                    <a href="#">
                      <h2>HUAK Successfully Recognized by CNAS</h2>
                    </a>
                    <p>
                      HUAK Testing Lab. (Safety Laboratory/Optical Laboratory/EMC/RF Lab)
                      successfully passed the on-site review conducted by China CNAS senior
                      review experts.
                    </p>
                    <a href="#" className="btn-yellow">
                      LEARN MORE
                    </a>
                  </div>
                </div>
                <div className="service_box">
                  <div className="service_img">
                    <img
                      src="/assets/images/news5.png"
                      alt="service 8"
                      style={{ width: '50%', height: 'auto' }}
                    />
                  </div>
                  <div className="service_details">
                    <a href="#">
                      <h2>HUAK 5G NR, Sub 6G Automated Test System Was Built</h2>
                    </a>
                    <p>HUAK 5G NR, Sub 6G Automated Test System Was Built5G NR SUB 6G、FCC、CE、SRRC test </p>
                    <a href="#" className="btn-yellow">
                      LEARN MORE
                    </a>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
      {/*===========================
        End Service
      ===========================*/}
    </>
  );
}

export default CommonServices;
