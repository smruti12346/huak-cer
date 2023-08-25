"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
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
  function sub(text) {
    return text.substring(0, 120) + "...";
  }

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
              <div className="blog_share_box" style={{height: "auto"}}>
                <div className="row">
                  <div className="col-md-4 center">
                    <div className="bl_share_img">
                      <Image
                        src="/assets/images/services/ce-service.png"
                        alt="blog 1"
                        width={200}
                        height={200}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <Link href="/services/eu-certification-project/ce-certification">
                      <div className="blog_share_details">
                        <h1>
                          <a href="#">CE Certification</a>
                        </h1>
                        <p>
                          {sub(`CE certification, that is, limited to the basic safety
                          requirements of products that do not endanger the
                          safety of humans, animals and goods, rather than the
                          general quality requirements, the coordination
                          directive only specifies the main requirements.`)}
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="blog_share_box" style={{height: "auto"}}>
                <div className="row">
                  <div className="col-md-4 center">
                    <div className="bl_share_img">
                      <Image
                        src="/assets/images/services/rohs-service.png"
                        alt="blog 1"
                        width={200}
                        height={200}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <Link href="/services/eu-certification-project/rohs-testing">
                      <div className="blog_share_details">
                        <h1>
                          <Link href="/services/eu-certification-project/rohs-testing">
                            RoHS testing
                          </Link>
                        </h1>
                        <p>
                          {sub(`RoHS is a mandatory standard developed by the European
                          Union legislation, its full name is the Directive on
                          the Restriction of Hazardous Substances in electronic
                          and electrical equipment.`)}
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="blog_share_box" style={{height: "auto"}}>
                <div className="row">
                  <div className="col-md-4 ">
                    <div className="bl_share_img">
                      <Image
                        src="/assets/images/services/rcm-service.png"
                        alt="blog 1"
                        width={200}
                        height={200}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <Link href="/services/eu-certification-project/reach-certification">
                      <div className="blog_share_details">
                        <h1>
                          <Link href="/services/eu-certification-project/reach-certification">
                            REACH testing
                          </Link>
                        </h1>
                        <p>
                          {sub(`REACH stands for Registration, Evaluation,
                          Authorization and Restriction of Chemicals
                          (Registration, Evaluation, Authorization and
                          Restriction of Chemicals). Regulation number is (EC)
                          No 1907/2006. This regulation is a chemical regulatory
                          system established by the European Union and
                          implemented from 1 June 2007.`)}
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="blog_share_box" style={{height: "auto"}}>
                <div className="row">
                  <div className="col-md-4 center">
                    <div className="bl_share_img">
                      <Image
                        src="/assets/images/services/telec-service.png"
                        alt="blog 1"
                        width={200}
                        height={200}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <Link href="/services/certification-project-of-asian/telec-certification-of-japan">
                      <div className="blog_share_details">
                        <h1>
                          <Link href="/services/certification-project-of-asian/telec-certification-of-japan">
                            Japan TELEC certification
                          </Link>
                        </h1>
                        <p>
                          {sub(`Japan&apos;s Radio Law requires type approval
                          (technical regulatory compliance certification) for
                          designated radio equipment. TELEC certification is
                          mandatory, and the certification body is a
                          registration certification body recognized by MIC in
                          the specified range of radio`)}
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="blog_share_box" style={{height: "auto"}}>
                <div className="row">
                  <div className="col-md-4 center">
                    <div className="bl_share_img">
                      <Image
                        src="/assets/images/ic.jpg"
                        alt="blog 1"
                        width={200}
                        height={200}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <Link href="/services/american-certification/ic-certification-of-canada">
                      <div className="blog_share_details">
                        <h1>
                          <Link href="/services/american-certification/ic-certification-of-canada">
                            Canadian IC certification
                          </Link>
                        </h1>
                        <p>
                          {sub(`IC is the abbreviation of Industry Canada, the
                          Ministry of Industry Canada, as a government agency,
                          responsible for the certification of electronic and
                          electrical products into the Canadian market. Similar
                          to the FCC in the United States, the IC currently only
                          limits electromagnetic interference.`)}
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="blog_share_box" style={{height: "auto"}}>
                <div className="row">
                  <div className="col-md-4 center">
                    <div className="bl_share_img">
                      <Image
                        src="/assets/images/cpc.jpg"
                        alt="blog 1"
                        width={200}
                        height={200}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="blog_share_details">
                      <h1>
                        <a href="#">Toy CPC certification</a>
                      </h1>
                      <p>
                        There are many variations passages of lorem ipsum
                        available but the majority have suffered alteration.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="blog_share_box" style={{height: "auto"}}>
                <div className="row">
                  <div className="col-md-4 center">
                    <div className="bl_share_img">
                      <Image
                        src="/assets/images/services/rcm-service.jpg"
                        alt="blog 1"
                        width={200}
                        height={200}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <Link href="/services/american-certification/cpc-certification">
                      <div className="blog_share_details">
                        <h1>
                          <Link href="/services/american-certification/cpc-certification">
                            Australian RCM certification
                          </Link>
                        </h1>
                        <p>
                          {sub(
                            `Children’s Product Certification refers to the written children’s Product Certificate (CPC) issued by the manufacturer and importer of children’s products to prove that their products meet the corresponding children’s product safety regulations. CPC and supported test reports must be in English and cover their product identification information. Children’s product certification must be based on test results from third-party laboratories accredited`
                          )}
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="blog_share_box" style={{height: "auto"}}>
                <div className="row">
                  <div className="col-md-4 center">
                    <div className="bl_share_img">
                      <Image
                        src="/assets/images/cb-certification.jpg"
                        alt="blog 1"
                        width={200}
                        height={200}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <Link href="/services/international-certification-project/cb-certification">
                      <div className="blog_share_details">
                        <h1>
                          <Link href="/services/international-certification-project/cb-certification">
                            CB certification
                          </Link>
                        </h1>
                        <p>
                          {sub(
                            `The CB system is a global system of mutual recognition of electronic products established by IECEE (International Electrotechnical Commission), which is a member of the CB system, which is a member of the CB system. Countries to recognize the test results to obtain national certification or approval, thereby promoting international trade. Most of the electrical and electronic products into the national market needs to meet the requirements of different laws and regulations, in the past, to obtain national product safety registration`
                          )}
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="blog_share_box" style={{height: "auto"}}>
                <div className="row">
                  <div className="col-md-4 center">
                    <div className="bl_share_img">
                      <Image
                        src="/assets/images/services/srrc.webp"
                        alt="srrc"
                        width={200}
                        height={200}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <Link href="/services/other-certification-projects/srrc-certification">
                      <div className="blog_share_details">
                        <h1>
                          <Link href="/services/other-certification-projects/srrc-certification">
                            SRRC
                          </Link>
                        </h1>
                        <p>
                          {sub(
                            `State Radio Regulatory Commission of the People’s Republic of China SRMC certification (also known as SRRC certification) since June 1, 1999, China’s Ministry of Information Industry (MII) mandates that all radio components sold and used in China,`
                          )}
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="blog_share_box"style={{height: "auto"}}>
                <div className="row">
                  <div className="col-md-4">
                    <div className="bl_share_img">
                      <Image
                        src="/assets/images/services/fcc-service.png"
                        alt="blog 1"
                        width={200}
                        height={200}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <Link href="/services/american-certification/fcc-certification-of-us">
                      <div className="blog_share_details">
                        <h1>
                          <Link href="/services/american-certification/fcc-certification-of-us">
                            FCC certification
                          </Link>
                        </h1>
                        <p>
                          {sub(
                            `FCC FCC ID certification full name is Federal Communications Commission, Chinese for the United States Federal Communications Commission. Established in 1934 by the Communications Act, it is an independent agency of the United States government, directly accountable to Congress. The FCC coordinates national and international communications by controlling radio, television, telecommunications, satellites and cables.`
                          )}
                        </p>
                      </div>
                    </Link>
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
