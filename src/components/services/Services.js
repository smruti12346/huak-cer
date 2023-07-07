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

<section className="blog_share_area section_padding">
        <div className="container">
          <div className="hero-section-title text-center">
            <h2 style={{ color: "#2c347c" }}>Common Services</h2>
          </div>
          <div className="row">
            <div className="col-md-6">
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
                        CE certification, which is limited to the product does
                        not endanger the basic safety requirements of human,
                        animal and cargo safety aspects, rather than the general
                      </p>
                      {/* <span className="comment_author">by admin - <a href="#">3 Comments</a></span> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
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
                        <a href="#">RoHS testesting</a>
                      </h1>
                      <p>
                        There are many variations passages of lorem ipsum
                        available but the majority have suffered alteration.
                      </p>
                      {/* <span className="comment_author">by admin - <a href="#">3 Comments</a></span> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
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
                        There are many variations passages of lorem ipsum
                        available but the majority have suffered alteration.
                      </p>
                      {/* <span className="comment_author">by admin - <a href="#">3 Comments</a></span> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
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
                        There are many variations passages of lorem ipsum
                        available but the majority have suffered alteration.
                      </p>
                      {/* <span className="comment_author">by admin - <a href="#">3 Comments</a></span> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="blog_share_box">
                <div className="row">
                  <div className="col-md-4">
                    <div className="bl_share_img">
                      <img
                        src="/assets/images/ic.jpg"
                        alt="blog 4"
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="blog_share_details">
                      <h1>
                        <a href="#">Canadian IC certification</a>
                      </h1>
                      <p>
                        There are many variations passages of lorem ipsum
                        available but the majority have suffered alteration.
                      </p>
                      {/* <span className="comment_author">by admin - <a href="#">3 Comments</a></span> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="blog_share_box">
                <div className="row">
                  <div className="col-md-4">
                    <div className="bl_share_img">
                      <img
                        src="/assets/images/cpc.jpg"
                        alt="blog 4"
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
                      {/* <span className="comment_author">by admin - <a href="#">3 Comments</a></span> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="blog_share_box">
                <div className="row">
                  <div className="col-md-4">
                    <div className="bl_share_img">
                      <img
                        src="/assets/images/services/rcm-service.jpg"
                        alt="blog 4"
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="blog_share_details">
                      <h1>
                        <a href="#">Australian RCM certification</a>
                      </h1>
                      <p>
                        There are many variations passages of lorem ipsum
                        available but the majority have suffered alteration.
                      </p>
                      {/* <span className="comment_author">by admin - <a href="#">3 Comments</a></span> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="blog_share_box">
                <div className="row">
                  <div className="col-md-4">
                    <div className="bl_share_img">
                      <img
                        src="/assets/images/cb-certification.jpg"
                        alt="blog 4"
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="blog_share_details">
                      <h1>
                        <a href="#">CB certification</a>
                      </h1>
                      <p>
                        There are many variations passages of lorem ipsum
                        available but the majority have suffered alteration.
                      </p>
                      {/* <span className="comment_author">by admin - <a href="#">3 Comments</a></span> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="blog_share_box">
                <div className="row">
                  <div className="col-md-4">
                    <div className="bl_share_img">
                      <img
                        src="/assets/images/un38.jpg"
                        alt="blog 4"
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="blog_share_details">
                      <h1>
                        <a href="#">UN38.3 testing</a>
                      </h1>
                      <p>
                        There are many variations passages of lorem ipsum
                        available but the majority have suffered alteration.
                      </p>
                      {/* <span className="comment_author">by admin - <a href="#">3 Comments</a></span> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="blog_share_box">
                <div className="row">
                  <div className="col-md-4">
                    <div className="bl_share_img">
                      <img
                        src="/assets/images/services/fcc-service.png"
                        alt="blog 4"
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="blog_share_details">
                      <h1>
                        <a href="#">FCC certification</a>
                      </h1>
                      <p>
                        There are many variations passages of lorem ipsum
                        available but the majority have suffered alteration.
                      </p>
                      {/* <span className="comment_author">by admin - <a href="#">3 Comments</a></span> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="text-center">
            <Link
              to="services"
              className="btn-yellow"
            >
              All Services
            </Link>
          </div> */}
        </div>
      
        <div className="container">
        
          <div className="row">
            <div className="col-md-6">
              <div className="blog_share_box">
                <div className="row">
                  <div className="col-md-4">
                    <div className="bl_share_img">
                      <img
                        src="/assets/images/SRRC.jpg"
                        alt="blog 1"
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="blog_share_details">
                      <h1>
                        <a href="#">SRRC Certification</a>
                      </h1>
                      <p>
                      SRRC is a member of the National Radio Regulatory Commission. Since June 1, 1999, the Ministry of Information Industry (MII) has imposed .
                      </p>
                      {/* <span className="comment_author">by admin - <a href="#">3 Comments</a></span> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="blog_share_box">
                <div className="row">
                  <div className="col-md-4">
                    <div className="bl_share_img">
                      <img
                        src="/assets/images/CCC.jpg"
                        alt="blog 2"
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="blog_share_details">
                      <h1>
                        <a href="#">CCC Certification</a>
                      </h1>
                      <p>
                      "CCC", referred to as "3C", it is the Chinese government to protect the personal safety of consumers and national security, to strengthen the quality of products.
                      </p>
                      {/* <span className="comment_author">by admin - <a href="#">3 Comments</a></span> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="blog_share_box">
                <div className="row">
                  <div className="col-md-4">
                    <div className="bl_share_img">
                      <img
                        src="/assets/images/CTA.jpg"
                        alt="blog 3"
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="blog_share_details">
                      <h1>
                        <a href="#">CTA Certification</a>
                      </h1>
                      <p>
                      The State implements a network licensing system for telecommunications terminal equipment, radio communication equipment and telecommunications .
                      </p>
                      {/* <span className="comment_author">by admin - <a href="#">3 Comments</a></span> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="blog_share_box">
                <div className="row">
                  <div className="col-md-4">
                    <div className="bl_share_img">
                      <img
                        src="/assets/images/cqc.jpg"
                        alt="blog 4"
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="blog_share_details">
                      <h1>
                        <a href="#">CQC Certification</a>
                      </h1>
                      <p>
                      CQC is a national certification body (NCB) on behalf of Chinas accession to the International Electrotechnical Commissions Electrotechnical Qualification Testing .
                      </p>
                      {/* <span className="comment_author">by admin - <a href="#">3 Comments</a></span> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="blog_share_box">
                <div className="row">
                  <div className="col-md-4">
                    <div className="bl_share_img">
                      <img
                        src="/assets/images/ncc.jpg"
                        alt="blog 4"
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="blog_share_details">
                      <h1>
                        <a href="#">NCC Certification of Taiwan</a>
                      </h1>
                      <p>
                      NCC is the Taiwan Communications Communications Commission (The National Communications Commission) referred to, mainly in the management of the Taiwan market .
                      </p>
                      {/* <span className="comment_author">by admin - <a href="#">3 Comments</a></span> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="blog_share_box">
                <div className="row">
                  <div className="col-md-4">
                    <div className="bl_share_img">
                      <img
                        src="/assets/images/ofca.jpg"
                        alt="blog 4"
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="blog_share_details">
                      <h1>
                        <a href="#">OFCA Certification of Hongkong</a>
                      </h1>
                      <p>
                      In Hong Kong, the TA has consulted the telecommunications industry to specify the technical specifications .
                      </p>
                      {/* <span className="comment_author">by admin - <a href="#">3 Comments</a></span> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="blog_share_box">
                <div className="row">
                  <div className="col-md-4">
                    <div className="bl_share_img">
                      <img
                        src="/assets/images/psb.jpg"
                        alt="blog 4"
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="blog_share_details">
                      <h1>
                        <a href="#">PSB Certification of Singapore
</a>
                      </h1>
                      <p>
                      PSB certification is Singapore mandatory safety certification, but the electromagnetic compatibility part  not required.
                      </p>
                      {/* <span className="comment_author">by admin - <a href="#">3 Comments</a></span> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="blog_share_box">
                <div className="row">
                  <div className="col-md-4">
                    <div className="bl_share_img">
                      <img
                        src="/assets/images/pse.jpg"
                        alt="blog 4"
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="blog_share_details">
                      <h1>
                        <a href="#">PSE Certification of Japan</a>
                      </h1>
                      <p>
                      PSE certification is Japans mandatory safety certification to prove that the electrical and electronic products have passed the Japanese electrical .
                      </p>
                      {/* <span className="comment_author">by admin - <a href="#">3 Comments</a></span> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="blog_share_box">
                <div className="row">
                  <div className="col-md-4">
                    <div className="bl_share_img">
                      <img
                        src="/assets/images/vcci.jpg"
                        alt="blog 4"
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="blog_share_details">
                      <h1>
                        <a href="#">VCCI Certification of Japan</a>
                      </h1>
                      <p>
                      VCCI is Japans Electromagnetic Compatibility Certification Mark and is managed by the Japan Voluntary Council for Information Technology Equipment.
                      </p>
                      {/* <span className="comment_author">by admin - <a href="#">3 Comments</a></span> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="blog_share_box">
                <div className="row">
                  <div className="col-md-4">
                    <div className="bl_share_img">
                      <img
                        src="/assets/images/bis.jpg"
                        alt="blog 4"
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="blog_share_details">
                      <h1>
                        <a href="#">BIS Certification of India</a>
                      </h1>
                      <p>
                      India in order to harmonize product regulatory standards and requirements to ensure product quality and safety, in 1955 began to implement product certification .
                      </p>
                      {/* <span className="comment_author">by admin - <a href="#">3 Comments</a></span> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="text-center">
            <Link
              to="services"
              className="btn-yellow"
            >
              All Services
            </Link>
          </div> */}
        </div>
      </section>


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
